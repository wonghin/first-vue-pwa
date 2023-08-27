<script setup lang="ts">
import PokemonItemTab from '@/components/tab/PokemonItemTab.vue';
import TabTest from '@/components/tab/TabTest.vue';
</script>

<template>
    <PokemonItemTab>
        <template #Envolutions>
            <div>Envolutions</div>
        </template>
        <template #Moves>
            <div>Moves</div>
        </template>
        <template #Types>
            <div>Types</div>
        </template>
    </PokemonItemTab>
</template>