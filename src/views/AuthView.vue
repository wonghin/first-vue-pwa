<script setup lang="ts">
import AuthGuard from '@/components/AuthGuard.vue'
import Layout from '@/layout/Layout.vue'
</script>

<template>
  <AuthGuard>
    <Layout />
  </AuthGuard>
</template>
