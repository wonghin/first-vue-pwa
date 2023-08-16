<script setup lang="ts"></script>

<template>
  <v-container
    fluid
    style="overflow-y: auto"
    :style="`height: calc(100vh - 127px);`"
  >
    <slot></slot>
  </v-container>
</template>
