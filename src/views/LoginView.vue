<script setup lang="ts">
import { useDisplay, useTheme } from "vuetify";
import { useForm } from "vee-validate";
//@ts-ignore
import * as yup from "yup";
import { useUserInfoStore } from "@/hooks/useUserInfoStore";
import router from "@/router";
import { ref } from "vue";

interface LoginForm {
  email: string;
  password: string;
}

const visible = ref(false)

const { sm, xs } = useDisplay();
const userInfo = useUserInfoStore();

const schema = yup.object({
  email: yup.string().email().required().label("E-mail"),
  password: yup.string().min(6).required(),
});

const { defineComponentBinds, handleSubmit, resetForm } = useForm<LoginForm>({
  validationSchema: schema,
  initialValues: {
    email: "test@test.com",
    password: "asdfajksdhfakjsdn",
  },
});

const vuetifyConfig = (state: any) => ({
  props: {
    "error-messages": state.errors,
  },
});

const email = defineComponentBinds("email", vuetifyConfig);
const password = defineComponentBinds("password", vuetifyConfig);

const onSubmit = handleSubmit((values) => {
  userInfo.$patch({ isLogin: true });
  router.push("/home");
  // console.log('Submitted with', values)
});




const theme = useTheme();
</script>

<template>
  <v-row no-gutters>
    <v-col cols="7" v-if="!sm && !xs" style="height: 100vh" class="d-flex align-center justify-center" :style="{
      'background-color': theme.global.current.value.dark
        ? '#000000'
        : '#f6f6f6',
    }">
      <!-- <div class="text-h2">Welcome Page</div> -->
    </v-col>
    <v-col cols="!sm&&!xs ? 12 : 5">
      <v-sheet style="height: 100vh" class="d-flex align-center justify-center flex-column">
        <v-form @submit="onSubmit" style="width: 70%">
          <div class="text-h2 mb-10" v-if="sm || xs">Pokedex</div>

          <v-text-field v-bind="email" label="Email" type="email" />
          <v-text-field v-bind="password" label="Password" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'" @click:append-inner="visible = !visible" />
          <v-btn type="submit" width="100%" class="mt-4" variant="outlined">
            Login
          </v-btn>
        </v-form>

        <!-- <v-form style="width: 70%">
          <v-btn type="submit" width="100%" class="mt-4" variant="outlined"> Google </v-btn>
        </v-form> -->
      </v-sheet>
    </v-col>
  </v-row>
</template>
