<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">用户管理</h1>
    <div class="tabs tabs-boxed mb-4">
      <router-link to="/users/list" class="tab" :class="{ 'tab-active': $route.path === '/users/list' }">用户列表</router-link>
      <router-link to="/users/roles" class="tab" :class="{ 'tab-active': $route.path === '/users/roles' }">角色权限</router-link>
      <router-link to="/users/groups" class="tab" :class="{ 'tab-active': $route.path === '/users/groups' }">用户组</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script> 