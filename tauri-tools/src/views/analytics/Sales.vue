<template>
  <div class="p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div class="card bg-base-200">
        <div class="card-body">
          <h3 class="card-title text-lg">销售趋势</h3>
          <div class="h-64 flex items-center justify-center bg-base-300 rounded-lg">
            图表区域 - 销售趋势
          </div>
        </div>
      </div>
      <div class="card bg-base-200">
        <div class="card-body">
          <h3 class="card-title text-lg">销售分布</h3>
          <div class="h-64 flex items-center justify-center bg-base-300 rounded-lg">
            图表区域 - 销售分布
          </div>
        </div>
      </div>
    </div>
    
    <div class="card bg-base-200">
      <div class="card-body">
        <h3 class="card-title text-lg mb-4">销售详情</h3>
        <div class="overflow-x-auto">
          <table class="table">
            <thead>
              <tr>
                <th>产品名称</th>
                <th>销售数量</th>
                <th>销售金额</th>
                <th>同比增长</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>产品 A</td>
                <td>1,234</td>
                <td>¥12,340</td>
                <td class="text-success">+12.5%</td>
              </tr>
              <tr>
                <td>产品 B</td>
                <td>856</td>
                <td>¥8,560</td>
                <td class="text-error">-5.2%</td>
              </tr>
              <tr>
                <td>产品 C</td>
                <td>2,345</td>
                <td>¥23,450</td>
                <td class="text-success">+8.7%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script> 