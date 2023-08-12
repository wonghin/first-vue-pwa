<script setup lang="ts">
import {
  useGetOnePokemonByProps,
  useGetPokmonSpecies
} from '@/api/pokemonApi'
import { usePokemonItemStore } from '@/hooks/usePokemonItemStore'
import { storeToRefs } from 'pinia'
import PokemonEvolutionChain from './PokemonEvolutionChain.vue'

const pokemonItem = usePokemonItemStore()
const { name } = storeToRefs(pokemonItem)

const { isError, error, isFetching, data } = useGetOnePokemonByProps(name, false)
// const data = reactive<PokemonItem>(myData)

const { data: speciesData, isFetching: speciesFetching } = useGetPokmonSpecies(name)
</script>

<template>
  <v-navigation-drawer location="bottom" temporary v-model="pokemonItem.isPokemonItemOpen"
    style="height: 80vh; z-index: 9999" touchless class="rounded-t-xl">
    <div v-if="isFetching">loading....</div>
    <!-- <div v-else-if="isError">{{ error.message }}</div> -->
    <i class="material-icons arrow_back_ios_new" style="position: absolute; top: 20px; left: 16px"
      @click="pokemonItem.isPokemonItemOpen = !pokemonItem.isPokemonItemOpen"></i>
    <div class="ma-4">
      <v-container fluid v-if="data">
        <div class="d-flex justify-center">
          <div>
            <!-- <div style="height: 20vw; width: 20vw; background-color: brown" class="elevation-6"></div> -->
            <div class="d-flex justify-space-between">
              <!-- <v-img height="30vw" width="30vw" max-height="300px" max-width="300px"></v-img> -->
              <v-img :src="data.sprites.versions?.['generation-v']['black-white'].animated?.front_default
                " height="30vw" width="30vw" max-height="300px" max-width="300px"></v-img>

              <!-- <v-img
                :src="data.sprites.versions?.['generation-v']['black-white'].animated?.back_default"
                height="30vw"
                width="30vw"
                max-height="300px"
                max-width="300px"
              ></v-img> -->
            </div>
            <div class="d-flex justify-center mt-8">
              {{ data.species.name }}
            </div>
            <div class="text-center">
              <v-chip v-if="data" v-for="(item, index) in data.types" :key="index" class="mr-2 mt-2">
                {{ item.type.name }}
              </v-chip>
            </div>
            <v-divider class="mt-6 border-opacity-25"></v-divider>
          </div>
        </div>
      </v-container>
      <div class="d-flex align-center flex-column" v-if="data">
        <div v-for="(stat, i) in data.stats" :key="i" class="d-flex flex-column"
          style="width: 40vw; min-width: 300px; max-width: 500px">
          <div class="d-flex align-center justify-space-between">
            <div>
              <div>{{ stat.stat.name }}:</div>
              <!-- <div>{{ stat.base_stat }}</div> -->
            </div>
            <div style="width: 40vw; max-width: 300px">
              <v-progress-linear :model-value="(stat.base_stat / 200) * 100" bg-color="pink-lighten-3"
                color="pink-lighten-1" height="8">
                <div style="font-size: xx-small">{{ stat.base_stat }}</div>
              </v-progress-linear>
            </div>
          </div>
        </div>
        <div class="mt-10">
          <!-- <div v-if="speciesFetching">loading...</div>
          <div v-else-if="speciesData">capture rate: {{ speciesData.capture_rate }}</div> -->
        </div>
        <div v-if="speciesFetching">Loading...</div>
        <div v-else-if="speciesData">
          <PokemonEvolutionChain :evolutionChainUrl="speciesData.evolution_chain.url" :name="name" />
        </div>
      </div>
    </div>
  </v-navigation-drawer>
</template>
