<script setup lang="ts">
import { useUserInfoStore } from '@/hooks/useUserInfoStore'
import router from '@/router'
import IconButton from './IconButton.vue'

interface Props {
  isShowIcon: boolean
}

const props = defineProps<Props>()
const store = useUserInfoStore()

const handlerLogin = () => {
  router.push('/')
  store.$patch({ isLogin: false })
}
</script>
<template>
  <IconButton
    icon="material-icons logout"
    text="Logout"
    @click="handlerLogin"
    v-if="props.isShowIcon"
  />
  <IconButton icon="material-icons logout" @click="handlerLogin" v-else="props.isShowIcon" />
</template>
