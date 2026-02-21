<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-4">
      <div class="flex gap-2">
        <input type="text" placeholder="搜索用户..." class="input-sm input input-bordered w-64" />
        <button class="btn btn-sm btn-primary">搜索</button>
      </div>
      <button class="btn btn-sm btn-primary">添加用户</button>
    </div>

    <div class="card bg-base-200">
      <div class="card-body">
        <div class="overflow-x-auto">
          <table class="table">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <th>用户名</th>
                <th>邮箱</th>
                <th>角色</th>
                <th>状态</th>
                <th>注册时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <td>
                  <div class="flex items-center gap-3">
                    <div class="avatar">
                      <div class="w-8 h-8 rounded-full">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=1" />
                      </div>
                    </div>
                    <div>张三</div>
                  </div>
                </td>
                <td>zhangsan@example.com</td>
                <td>管理员</td>
                <td><div class="badge badge-sm badge-success">活跃</div></td>
                <td>2024-01-01</td>
                <td>
                  <div class="flex gap-2">
                    <button class="btn btn-sm btn-ghost">编辑</button>
                    <button class="btn btn-sm btn-ghost text-error">删除</button>
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <td>
                  <div class="flex items-center gap-3">
                    <div class="avatar">
                      <div class="w-8 h-8 rounded-full">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" />
                      </div>
                    </div>
                    <div>李四</div>
                  </div>
                </td>
                <td>lisi@example.com</td>
                <td>编辑</td>
                <td><div class="badge badge-warning">待激活</div></td>
                <td>2024-01-02</td>
                <td>
                  <div class="flex gap-2">
                    <button class="btn btn-sm btn-ghost">编辑</button>
                    <button class="btn btn-sm btn-ghost text-error">删除</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex justify-between items-center mt-4">
          <div class="text-sm text-base-content/70">
            显示 1 到 2 条，共 2 条
          </div>
          <div class="join">
            <button class="join-item btn btn-sm">«</button>
            <button class="join-item btn btn-sm btn-active">1</button>
            <button class="join-item btn btn-sm">»</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script> 