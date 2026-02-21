#[tauri::command]
async fn generate() {}

pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![generate])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
