<script setup lang="ts">
import LogoutButton from '@/components/button/LogoutButton.vue'
import ThemeButton from '@/components/button/ThemeButton.vue'
import { useDisplay } from 'vuetify'
import router from '@/router'
import { useGetAllPokemon, useGetOnePokemon } from '@/api/pokemonApi'
import { usePokemonItemStore } from '@/hooks/usePokemonItemStore'
import OptionButton from '@/components/button/OptionButton.vue'
// const layout = useLayoutStore()

const { xs, sm } = useDisplay()
const handlerNav = (path: string) => {
  router.push(path)
}
const pokemonItem = usePokemonItemStore()
</script>
<template>
  <!-- <v-app-bar :density="sm || xs ? 'prominent' : 'default'"> -->
  <v-app-bar>
    <!-- <div class="text-h5 pa-6 ml-8" @click="handlerNav('/home')">POKEMON</div> -->
    <v-progress-linear :active="pokemonItem.paginationLoading" :indeterminate="pokemonItem.paginationLoading" absolute
      bottom color="deep-purple-accent-4"></v-progress-linear>
    <template v-slot:append>
      <ThemeButton class="d-flex align-center mr-4" />
      <!-- <LogoutButton :isShowIcon="false" /> -->
      <OptionButton />

    </template>
    <!-- <template v-slot:append v-if="!sm && !xs">
      <ThemeButton class="d-flex align-center mr-4" />
      <LogoutButton :isShowIcon="false" />
    </template>
    <template v-slot:append v-else>
      <ThemeButton class="d-flex align-center mr-4" />
      <OptionButton />
    </template> -->
  </v-app-bar>
</template>
