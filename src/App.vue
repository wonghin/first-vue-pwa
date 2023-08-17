<script setup lang="ts">
import { VueQueryDevTools } from "vue-query/devtools";
import MyLayout from "./layout/MyLayout.vue";
</script>

<template>
  <VueQueryDevTools position="top-left" />
  <router-view></router-view>
  <!-- <MyLayout /> -->
</template>
