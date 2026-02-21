<template>
  <div class="p-4">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">CPU 使用率</div>
          <div class="stat-value">45%</div>
          <div class="stat-desc">正常范围内</div>
        </div>
      </div>
      
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">内存使用</div>
          <div class="stat-value">2.8GB</div>
          <div class="stat-desc text-warning">接近警戒值</div>
        </div>
      </div>
      
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">磁盘使用率</div>
          <div class="stat-value">65%</div>
          <div class="stat-desc">正常范围内</div>
        </div>
      </div>
      
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">网络延迟</div>
          <div class="stat-value">45ms</div>
          <div class="stat-desc text-success">良好</div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4">
      <div class="card bg-base-200">
        <div class="card-body">
          <h3 class="card-title text-lg">系统性能监控</h3>
          <div class="h-64 flex items-center justify-center bg-base-300 rounded-lg">
            图表区域 - 系统性能实时监控
          </div>
        </div>
      </div>
      
      <div class="card bg-base-200">
        <div class="card-body">
          <h3 class="card-title text-lg mb-4">性能日志</h3>
          <div class="overflow-x-auto">
            <table class="table">
              <thead>
                <tr>
                  <th>时间</th>
                  <th>事件类型</th>
                  <th>详情</th>
                  <th>状态</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10:24:15</td>
                  <td>CPU 峰值</td>
                  <td>CPU 使用率达到 85%</td>
                  <td><div class="badge badge-warning">警告</div></td>
                </tr>
                <tr>
                  <td>10:15:32</td>
                  <td>内存释放</td>
                  <td>系统自动释放了 500MB 内存</td>
                  <td><div class="badge badge-success">正常</div></td>
                </tr>
                <tr>
                  <td>10:12:45</td>
                  <td>网络延迟</td>
                  <td>网络延迟短暂升高到 120ms</td>
                  <td><div class="badge badge-error">异常</div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script> 