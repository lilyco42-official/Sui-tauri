<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-4">
      <div class="flex gap-2">
        <input type="text" placeholder="搜索角色..." class="input input-bordered w-64" />
        <button class="btn btn-primary">搜索</button>
      </div>
      <button class="btn btn-primary">添加角色</button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- 管理员角色卡片 -->
      <div class="card bg-base-200">
        <div class="card-body">
          <div class="flex justify-between items-start">
            <h3 class="card-title text-lg">管理员</h3>
            <div class="dropdown dropdown-end">
              <button tabindex="0" class="btn btn-ghost btn-sm btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
              </button>
              <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>编辑角色</a></li>
                <li><a class="text-error">删除角色</a></li>
              </ul>
            </div>
          </div>
          <p class="text-sm text-base-content/70 mb-4">系统最高权限角色，可以进行所有操作</p>
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <input type="checkbox" checked="checked" class="checkbox checkbox-sm checkbox-primary" disabled />
              <span class="text-sm">用户管理</span>
            </div>
            <div class="flex items-center gap-2">
              <input type="checkbox" checked="checked" class="checkbox checkbox-sm checkbox-primary" disabled />
              <span class="text-sm">角色管理</span>
            </div>
            <div class="flex items-center gap-2">
              <input type="checkbox" checked="checked" class="checkbox checkbox-sm checkbox-primary" disabled />
              <span class="text-sm">系统设置</span>
            </div>
          </div>
          <div class="mt-4">
            <div class="badge badge-neutral">3 个用户</div>
          </div>
        </div>
      </div>

      <!-- 编辑角色卡片 -->
      <div class="card bg-base-200">
        <div class="card-body">
          <div class="flex justify-between items-start">
            <h3 class="card-title text-lg">编辑</h3>
            <div class="dropdown dropdown-end">
              <button tabindex="0" class="btn btn-ghost btn-sm btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
              </button>
              <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>编辑角色</a></li>
                <li><a class="text-error">删除角色</a></li>
              </ul>
            </div>
          </div>
          <p class="text-sm text-base-content/70 mb-4">可以编辑内容但无法进行系统设置</p>
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <input type="checkbox" checked="checked" class="checkbox checkbox-sm checkbox-primary" disabled />
              <span class="text-sm">内容编辑</span>
            </div>
            <div class="flex items-center gap-2">
              <input type="checkbox" checked="checked" class="checkbox checkbox-sm checkbox-primary" disabled />
              <span class="text-sm">评论管理</span>
            </div>
            <div class="flex items-center gap-2">
              <input type="checkbox" class="checkbox checkbox-sm" disabled />
              <span class="text-sm">系统设置</span>
            </div>
          </div>
          <div class="mt-4">
            <div class="badge badge-neutral">5 个用户</div>
          </div>
        </div>
      </div>

      <!-- 访客角色卡片 -->
      <div class="card bg-base-200">
        <div class="card-body">
          <div class="flex justify-between items-start">
            <h3 class="card-title text-lg">访客</h3>
            <div class="dropdown dropdown-end">
              <button tabindex="0" class="btn btn-ghost btn-sm btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
              </button>
              <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>编辑角色</a></li>
                <li><a class="text-error">删除角色</a></li>
              </ul>
            </div>
          </div>
          <p class="text-sm text-base-content/70 mb-4">仅可以查看公开内容</p>
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <input type="checkbox" checked="checked" class="checkbox checkbox-sm checkbox-primary" disabled />
              <span class="text-sm">查看内容</span>
            </div>
            <div class="flex items-center gap-2">
              <input type="checkbox" class="checkbox checkbox-sm" disabled />
              <span class="text-sm">编辑内容</span>
            </div>
            <div class="flex items-center gap-2">
              <input type="checkbox" class="checkbox checkbox-sm" disabled />
              <span class="text-sm">系统设置</span>
            </div>
          </div>
          <div class="mt-4">
            <div class="badge badge-neutral">12 个用户</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script> 