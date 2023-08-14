<script setup lang="ts">
import { ref } from "vue";

const isLiked = ref<boolean>(false);
</script>
<template>
  <div @click.stop="isLiked = !isLiked">
    <v-icon v-if="isLiked" icon="mdi-cards-heart" size="small" />
    <v-icon v-else icon="mdi-cards-heart-outline" size="small" />
  </div>
</template>
