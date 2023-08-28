<script setup lang="ts">
import router, { mainRouter } from '@/router'
import { useDisplay } from 'vuetify'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import ThemeButton from '@/components/button/ThemeButton.vue'

const drawerItems = [
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

const { xs, sm } = useDisplay()
const route = useRoute()

const currentRouteName = computed(() => route.name)
</script>
<template>
  <v-navigation-drawer expand-on-hover rail v-if="!xs && !sm">
    <v-list>
      <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/1.jpg" title="Sandra Adams"
        subtitle="sandra_a88@gmailcom"></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item :active="currentRouteName === item.value" @click="handlerNav(item.value)" :value="item.value"
        v-for="item in drawerItems" :key="item.value">
        <div class="d-flex">
          <i :class="item.icon"></i>
          <div class="ml-10">{{ item.value }}</div>
        </div>
      </v-list-item>
    </v-list>
    <template v-slot:append>

      <ThemeButton class="pa-2" />
    </template>
  </v-navigation-drawer>
  <!-- 
  <v-main style="height: 250px"></v-main> -->
</template>
