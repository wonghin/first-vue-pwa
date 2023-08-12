<script setup lang="ts">
import { useGetOnePokemonByProps } from '@/api/pokemonApi'
import { computed, ref } from 'vue'

interface CardProps {
  image?: string
  title: string
  id: number
  isLoading?: boolean

  // types?: Object
  // weight?: number
}

interface TypeArray {
  types: TypeElement[]
}

interface TypeElement {
  slot: number
  type: Type
}

interface Type {
  name: string
  url: string
}

const cardProps = defineProps<CardProps>()

const imageUrl = computed(
  () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${cardProps.id}.png`
)
const name = ref<string>(cardProps.title)
const { data, isLoading } = useGetOnePokemonByProps(name)
</script>

<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card width="30vw" min-width="285" v-bind="props" :elevation="isHovering ? 24 : 6" hover
      :loading="cardProps.isLoading" class="rounded-b-shaped">
      <div class="position-absolute" style="right: 10px; top: 10px">
        <v-chip class="elevation-1" size="small">ID: {{ cardProps.id }}</v-chip>
      </div>
      <div class="d-flex justify-center">
        <v-img :src="imageUrl" height="20vh" width="20vh"> </v-img>
        <!-- <v-img height="20vh" width="20vh"> </v-img> -->
      </div>

      <v-card-title>
        {{ cardProps.title }}
      </v-card-title>
      <v-card-text class="d-flex">
        <v-chip v-if="isLoading"> </v-chip>
        <v-chip v-if="data" v-for="(item, index) in data.types" :key="index" class="mr-2 elevation-1">
          {{ item.type.name }}
        </v-chip>
      </v-card-text>
      <!-- <div v-if="specisData">{{ specisData }}</div> -->
    </v-card>
  </v-hover>
</template>
