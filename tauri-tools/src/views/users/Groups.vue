<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-4">
      <div class="flex gap-2">
        <input type="text" placeholder="搜索用户组..." class="input input-bordered w-64" />
        <button class="btn btn-primary">搜索</button>
      </div>
      <button class="btn btn-primary">创建用户组</button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- 研发部门 -->
      <div class="card bg-base-200">
        <div class="card-body">
          <div class="flex justify-between items-start">
            <h3 class="card-title text-lg">研发部门</h3>
            <div class="dropdown dropdown-end">
              <button tabindex="0" class="btn btn-ghost btn-sm btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
              </button>
              <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>编辑用户组</a></li>
                <li><a>管理成员</a></li>
                <li><a class="text-error">删除用户组</a></li>
              </ul>
            </div>
          </div>
          <p class="text-sm text-base-content/70 mb-4">负责产品研发和技术支持</p>
          <div class="flex flex-wrap gap-2">
            <div class="avatar-group -space-x-4 rtl:space-x-reverse">
              <div class="avatar">
                <div class="w-8">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=1" />
                </div>
              </div>
              <div class="avatar">
                <div class="w-8">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" />
                </div>
              </div>
              <div class="avatar">
                <div class="w-8">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=3" />
                </div>
              </div>
              <div class="avatar placeholder">
                <div class="w-8 bg-neutral text-neutral-content">
                  <span class="text-xs">+5</span>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4 flex gap-2">
            <div class="badge badge-neutral">8 个成员</div>
            <div class="badge badge-primary">技术团队</div>
          </div>
        </div>
      </div>

      <!-- 产品部门 -->
      <div class="card bg-base-200">
        <div class="card-body">
          <div class="flex justify-between items-start">
            <h3 class="card-title text-lg">产品部门</h3>
            <div class="dropdown dropdown-end">
              <button tabindex="0" class="btn btn-ghost btn-sm btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
              </button>
              <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>编辑用户组</a></li>
                <li><a>管理成员</a></li>
                <li><a class="text-error">删除用户组</a></li>
              </ul>
            </div>
          </div>
          <p class="text-sm text-base-content/70 mb-4">负责产品规划和用户体验</p>
          <div class="flex flex-wrap gap-2">
            <div class="avatar-group -space-x-4 rtl:space-x-reverse">
              <div class="avatar">
                <div class="w-8">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=4" />
                </div>
              </div>
              <div class="avatar">
                <div class="w-8">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=5" />
                </div>
              </div>
              <div class="avatar placeholder">
                <div class="w-8 bg-neutral text-neutral-content">
                  <span class="text-xs">+3</span>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4 flex gap-2">
            <div class="badge badge-neutral">5 个成员</div>
            <div class="badge badge-secondary">产品团队</div>
          </div>
        </div>
      </div>

      <!-- 运营部门 -->
      <div class="card bg-base-200">
        <div class="card-body">
          <div class="flex justify-between items-start">
            <h3 class="card-title text-lg">运营部门</h3>
            <div class="dropdown dropdown-end">
              <button tabindex="0" class="btn btn-ghost btn-sm btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
              </button>
              <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>编辑用户组</a></li>
                <li><a>管理成员</a></li>
                <li><a class="text-error">删除用户组</a></li>
              </ul>
            </div>
          </div>
          <p class="text-sm text-base-content/70 mb-4">负责市场运营和用户增长</p>
          <div class="flex flex-wrap gap-2">
            <div class="avatar-group -space-x-4 rtl:space-x-reverse">
              <div class="avatar">
                <div class="w-8">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=6" />
                </div>
              </div>
              <div class="avatar">
                <div class="w-8">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=7" />
                </div>
              </div>
              <div class="avatar">
                <div class="w-8">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=8" />
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4 flex gap-2">
            <div class="badge badge-neutral">3 个成员</div>
            <div class="badge badge-accent">运营团队</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script> 