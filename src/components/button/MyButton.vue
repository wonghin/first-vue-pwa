<script setup lang="ts">
//@ts-ignore
import { useUserInfoStore } from '@/hooks/useUserInfoStore'

const store = useUserInfoStore()
console.log(store.isLogin)

const handlerLogin = () => {
  store.$patch({ isLogin: !store.isLogin })
}
</script>

<template>
  <v-btn variant="outlined" @click="handlerLogin"> Logout </v-btn>
</template>
<style></style>
