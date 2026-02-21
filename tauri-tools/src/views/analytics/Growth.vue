<template>
  <div class="p-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">新增用户</div>
          <div class="stat-value">2,345</div>
          <div class="stat-desc text-success">↗︎ 14%</div>
        </div>
      </div>
      
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">活跃用户</div>
          <div class="stat-value">1,234</div>
          <div class="stat-desc text-success">↗︎ 7%</div>
        </div>
      </div>
      
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">留存率</div>
          <div class="stat-value">85%</div>
          <div class="stat-desc text-error">↘︎ 2%</div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card bg-base-200">
        <div class="card-body">
          <h3 class="card-title text-lg">用户增长趋势</h3>
          <div class="h-64 flex items-center justify-center bg-base-300 rounded-lg">
            图表区域 - 用户增长趋势
          </div>
        </div>
      </div>
      
      <div class="card bg-base-200">
        <div class="card-body">
          <h3 class="card-title text-lg">用户来源分布</h3>
          <div class="h-64 flex items-center justify-center bg-base-300 rounded-lg">
            图表区域 - 用户来源分布
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script> 