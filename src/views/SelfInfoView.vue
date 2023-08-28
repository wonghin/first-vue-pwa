<script setup lang="ts">
import Container from "@/components/viewContainer/Container.vue";
import { useTheme } from "vuetify/lib/framework.mjs";

const theme = useTheme();
</script>
<template>
  <Container>
    <h1>About Me</h1>
    <!-- <div class="d-flex justify-space-between align-center flex-wrap">
      <a
        href="https://www.andyhk.com/"
        :style="{
          color: theme.global.current.value.dark ? '#FFFFFF' : '#212121',
        }"
        >Visit my profile page</a
      >
      <div>
        <v-btn
          prepend-icon="mdi-github"
          href="https://github.com/wonghin/first-vue-pwa"
          variant="text"
        >
          Pokedex
        </v-btn>
      </div>
    </div> -->
    <v-row>
      <v-col>
        <a href="https://www.andyhk.com/" :style="{
          color: theme.global.current.value.dark ? '#FFFFFF' : '#212121',
        }">Visit my profile page</a>
      </v-col>
      <v-col>
        <div class="d-flex flex-column" style="align-items: end">
          <v-btn prepend-icon="mdi-github" href="https://github.com/wonghin/first-vue-pwa" variant="text">
            Pokedex
          </v-btn>
          <v-btn prepend-icon="mdi-link-box-variant" href="https://pokeapi.co/" variant="text">
            Pokemon Api
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <p class="mb-4 mt-8">
      Hello, everyone! My name is Andy. I have been working on a fascinating
      project recently — building a Pokedex. Through this project, I am learning
      Vue 3, a Typscript framework that has captured my attention. I am
      utilizing various tools and technologies, including Vuetify for beautiful
      UI components, Vue Composition API for flexible component logic, Pinia for
      state management, Vue Router for navigation, and Vue Query for API calls
      and server state management.
    </p>

    <p class="mb-4">
      My initial experience with Vue has been nothing short of amazing. I find
      its syntax to be clear, simple, and beautiful, which has made my learning
      journey enjoyable so far. Coming from a React background, I have noticed
      similarities between the two frameworks, but Vue's elegance and intuitive
      design philosophy have truly impressed me. The Vue ecosystem is
      well-organized, with abundant resources and a supportive community, making
      it easy to grasp and explore.
    </p>

    <p class="mb-4">
      Building this Pokedex project has not only been a fun endeavor, but also a
      fantastic opportunity to enhance my Vue skills. I am thrilled to be part
      of this journey, where I can create something practical while expanding my
      knowledge in frontend development.
    </p>

    <p class="mb-16">
      Thank you for taking the time to get to know me. If you have any questions
      or would like to discuss anything related to frontend development or Vue,
      feel free to reach out. Let's connect and learn together!
    </p>
  </Container>
</template>
