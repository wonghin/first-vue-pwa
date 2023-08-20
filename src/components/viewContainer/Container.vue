<script setup lang="ts">
import { useLayoutStore } from '@/hooks/useLayoutStore';

const layout = useLayoutStore()
</script>

<template>
  <!-- Purpose: Only PWA || infiniteScroll-->
  <v-container class="mt-4" fluid style="overflow-y: auto"
    :style="layout.isInfiniteScroll ? `height:90vh` : `height: calc(100vh - 120px);`"
    v-if="layout.isPwa || layout.isInfiniteScroll">
    <slot></slot>
  </v-container>
  <!-- Purpose: Mobile browser and pc browser -->
  <!--  -->
  <v-container v-else fluid class="mt-4">
    <slot>
    </slot>
  </v-container>
</template>
