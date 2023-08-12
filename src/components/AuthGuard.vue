<script setup lang="ts">
import { useUserInfoStore } from '@/hooks/useUserInfoStore'
import LoginView from '@/views/LoginView.vue'
const store = useUserInfoStore()
</script>

<template>
  <div v-if="store.isLogin === true">
    <slot></slot>
  </div>
  <div v-else>
    <LoginView />
  </div>
</template>
