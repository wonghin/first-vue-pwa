<script setup lang="ts"></script>

<template>
  <v-container
    fluid
    style="overflow-y: auto"
    :style="`height: calc(100vh - 120px);`"
  >
    <slot></slot>
  </v-container>
</template>
