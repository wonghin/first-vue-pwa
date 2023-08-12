<template>
  <div class="text-center">
    <v-btn color="error" @click="overlay = !overlay">
      Show Overlay
    </v-btn>

    <v-overlay v-model="overlay" :scrim="true"></v-overlay>
  </div>
</template>
<script lang="ts">
export default {
  data: () => ({
    overlay: false,
  }),

  watch: {
    overlay(val) {
      val && setTimeout(() => {
        this.overlay = false
      }, 2000)
    },
  },
}
</script>