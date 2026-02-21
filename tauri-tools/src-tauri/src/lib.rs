use std::sync::Mutex;
use tauri::Manager;
// 引入 bitnet-cpp 的预导出版本
use bitnet_cpp::prelude::*;

// 定义 trait 保持不变
trait ModelTrait: Send + Sync {
    fn generate(&self, prompt: &str) -> Result<String, String>;
}

// 真正的 BitNet 模型结构体
struct BitNetModel {
    // 这是 bitnet-cpp 中的模型上下文
    context: Box<Context>,
}

impl ModelTrait for BitNetModel {
    fn generate(&self, prompt: &str) -> Result<String, String> {
        // 调用 bitnet-cpp 的生成接口
        // 这里的 API 可能略有不同，需要根据 bitnet-cpp 的实际文档调整
        self.context.generate(prompt).map_err(|e| e.to_string())
    }
}

// 加载函数
fn load_model(path: &std::path::Path) -> Result<Box<dyn ModelTrait>, String> {
    // 使用 bitnet-cpp 加载模型
    let mut ctx = Context::new();
    ctx.load_model(path)
        .map_err(|e| format!("Failed to load BitNet model: {}", e))?;

    Ok(Box::new(BitNetModel {
        context: Box::new(ctx),
    }))
}

// ModelState 和 generate 命令完全不需要改动
struct ModelState(Mutex<Option<Box<dyn ModelTrait>>>);

#[tauri::command]
async fn generate(
    state: tauri::State<'_, ModelState>,
    prompt: String,
    history: Vec<serde_json::Value>,
) -> Result<String, String> {
    let mut guard = state.0.lock().unwrap();
    if guard.is_none() {
        // 注意：这里需要换成你下载的 BitNet 模型文件路径
        let model_path = std::path::Path::new("models/bitnet_model.bin");
        *guard = Some(load_model(model_path)?);
    }
    let model = guard.as_ref().unwrap();

    // 构建提示（和之前一样）
    let mut full_prompt = String::new();
    for msg in history {
        if let (Some(role), Some(content)) = (msg["role"].as_str(), msg["content"].as_str()) {
            full_prompt.push_str(&format!("{}: {}\n", role, content));
        }
    }
    full_prompt.push_str(&format!("user: {}\nassistant: ", prompt));

    model.generate(&full_prompt)
}

pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .manage(ModelState(Mutex::new(None)))
        .invoke_handler(tauri::generate_handler![generate])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
