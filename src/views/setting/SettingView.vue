<script setup lang="ts">
import { useLayoutStore } from '@/hooks/useLayoutStore'

const layout = useLayoutStore()
</script>
<template>
  <v-navigation-drawer
    location="bottom"
    temporary
    v-model="layout.isOpenDrawer"
    style="height: 93vh"
    touchless
  >
    <div class="ma-4">
      <i
        class="material-icons arrow_back_ios_new"
        @click="layout.isOpenDrawer = !layout.isOpenDrawer"
      ></i>
    </div>
    <div>setting</div>
  </v-navigation-drawer>
</template>
