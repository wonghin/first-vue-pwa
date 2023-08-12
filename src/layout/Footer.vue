<script setup lang="ts">
import router from '@/router'
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useRoute } from 'vue-router'

const { sm, xs, md } = useDisplay()
const drawerItems = [
  {
    icon: 'material-icons home',
    value: '/'
  },
  {
    icon: 'material-icons business_center',
    value: 'D1'
  },
  {
    icon: 'material-icons cases',
    value: 'D2'
  },
  {
    icon: 'material-icons collections',
    value: 'D3'
  }
]
const handlerNav = (path: string) => {
  router.push(path)
}
const route = useRoute()

const currentRouteName = computed(() => route.name)
</script>
<template>
  <v-bottom-navigation grow v-if="sm || xs">
    <v-btn
      :active="currentRouteName === item.value"
      @click="handlerNav(item.value)"
      :value="item.value"
      v-for="item in drawerItems"
      :key="item.value"
      :ripple="false"
    >
      <div>
        <i :class="item.icon"></i>
        <!-- <div class="ml-10">{{ item.value }}</div> -->
      </div>
    </v-btn>
    <!-- <v-btn value="1">
      <v-icon>mdi-history</v-icon>
      Tab 1
    </v-btn>

    <v-btn value="2">
      <v-icon>mdi-heart</v-icon>
      Tab 2
    </v-btn>
    <v-btn value="3">
      <v-icon>mdi-map-marker</v-icon>
      Tab 3
    </v-btn>
    <v-btn value="4">
      <v-icon>mdi-map-marker</v-icon>
      Tab 4
    </v-btn>
    <v-btn value="5">
      <v-icon>mdi-map-marker</v-icon>
      Tab 5
    </v-btn> -->
  </v-bottom-navigation>
</template>
