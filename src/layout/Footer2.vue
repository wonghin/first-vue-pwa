<script setup lang="ts">
import router from '@/router'
import { useDisplay, useTheme } from 'vuetify'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
//@ts-ignore
import _ from 'lodash'
const { sm, xs, md } = useDisplay()
const theme = useTheme()
const drawerItems = [
  {
    icon: 'material-icons home',
    value: 'home'
  },
  {
    icon: 'material-icons business_center',
    value: 'D1'
  },
  {
    icon: 'material-icons compare_arrows',
    value: 'D2'
  },
  {
    icon: 'material-icons favorite',
    value: 'D3'
  }
]

const handlerNav = (path: string) => {
  router.push(path)
}
// console.log(theme.computedThemes.value.dark.colors.background)

const route = useRoute()
const currentRouteName = computed(() => route.name)

const matchPathPattern = (itemValue: string) => {
  if (_.includes(router.currentRoute.value.path, itemValue)) {
    return true
  } else {
    return false
  }
}
</script>

<template>
  <div
    style="position: fixed; bottom: 0; width: 100vw"
    v-if="sm || xs"
    class="elevation-8"
    :style="{ 'background-color': theme.global.current.value.dark ? '#212121' : '#FFFFFF' }"
  >
    <div class="d-flex justify-space-evenly align-center mt-2 pb-2">
      <v-btn
        variant="text"
        @click="handlerNav(item.value)"
        :value="item.value"
        v-for="item in drawerItems"
        :key="item.value"
        :active="matchPathPattern(item.value)"
        :class="item.icon"
        class="d-flex align-center"
      >
      </v-btn>
    </div>
  </div>
</template>
