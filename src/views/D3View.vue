<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentRouteName = computed(() => route.name)
</script>
<template>
  <v-container>{{ currentRouteName }}</v-container>
</template>
