<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">仪表盘</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="card bg-primary text-primary-content">
        <div class="card-body">
          <h2 class="card-title">总用户</h2>
          <p class="text-3xl font-bold">1,234</p>
        </div>
      </div>
      <div class="card bg-secondary text-secondary-content">
        <div class="card-body">
          <h2 class="card-title">总订单</h2>
          <p class="text-3xl font-bold">856</p>
        </div>
      </div>
      <div class="card bg-accent text-accent-content">
        <div class="card-body">
          <h2 class="card-title">本月收入</h2>
          <p class="text-3xl font-bold">¥45,678</p>
        </div>
      </div>
      <div class="card bg-neutral text-neutral-content">
        <div class="card-body">
          <h2 class="card-title">活跃用户</h2>
          <p class="text-3xl font-bold">89%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script> 