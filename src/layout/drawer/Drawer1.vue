<script lang="ts" setup>
import { useLayoutStore } from '@/hooks/useLayoutStore'
import router from '@/router'

const layout = useLayoutStore()
const handlerNav = (path: string) => {
  router.push(path)
}
</script>

<template>
  <v-navigation-drawer v-model="layout.isOpenDrawer">
    <v-list density="compact" nav>
      <v-list-item value="1" @click="handlerNav('D1')">
        <div class="d-flex">
          <i class="material-icons business_center"></i>
          <div class="ml-10">D1</div>
        </div>
      </v-list-item>
      <v-list-item value="2" @click="handlerNav('D2')">
        <div class="d-flex">
          <i class="material-icons cases"></i>
          <div class="ml-10">D2</div>
        </div>
      </v-list-item>
      <v-list-item value="3" @click="handlerNav('D3')">
        <div class="d-flex">
          <i class="material-icons collections"></i>
          <div class="ml-10">D3</div>
        </div>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
