<script setup lang="ts">
import router, { mainRouter } from '@/router'
import { useDisplay } from 'vuetify'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import ThemeButton from '@/components/button/ThemeButton.vue'
import { ref } from 'vue'

const drawerItems = [
    {
        icon: "mdi-home-outline",
        activeIcon: "mdi-home",
        value: "home",
        title: 'Home'
    },
    {
        icon: "mdi-select-compare",
        activeIcon: "mdi-compare",
        value: "D2",
        title: 'Compare'

    },
    {
        icon: "mdi-heart-outline",
        activeIcon: "mdi-heart",
        value: "D3",
        title: 'Favourite'
    },
    {
        icon: "mdi-information-slab-circle-outline",
        activeIcon: "mdi-information",
        value: "D1",
        title: 'Info'

    },
];

const handlerNav = (path: string) => {
    router.push(path)
}

const { xs, sm } = useDisplay()
const route = useRoute()

const currentRouteName = computed(() => route.name)
</script>
<template>
    <v-navigation-drawer expand-on-hover rail v-if="!xs && !sm">
        <v-list>
            <!-- <v-list-item prepend-avatar="https://cdn-icons-png.flaticon.com/512/1169/1169608.png"></v-list-item> -->
            <v-img :class="'ma-2'"
                :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'"></v-img>
        </v-list>
        <!-- <v-list>
            <v-list-item prepend-avatar=" https://cdn-icons-png.flaticon.com/512/1169/1169608.png" title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"></v-list-item>
    </v-list> -->

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item :active="currentRouteName === item.value" @click="handlerNav(item.value)" :value="item.value"
                v-for="item in drawerItems" :key="item.value" :prepend-icon="item.icon" :title="item.title">

            </v-list-item>
        </v-list>
        <template v-slot:append>
            <ThemeButton class="pa-2" />
        </template>
    </v-navigation-drawer>
    <!-- 
  <v-main style="height: 250px"></v-main> -->
</template>
