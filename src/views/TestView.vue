<script setup lang="ts">
import { useForm } from 'vee-validate'
//@ts-ignore
import * as yup from 'yup'

const schema = yup.object({
  name: yup.string().required().label('Name'),
  email: yup.string().email().required().label('E-mail'),
  password: yup.string().min(6).required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required()
    .label('Password confirmation'),
  terms: yup.boolean().required().oneOf([true], 'You must agree to terms and conditions')
})

const { defineComponentBinds, handleSubmit, resetForm } = useForm({
  validationSchema: schema
})

// Refer to the docs for how to make advanced validation behaviors with dynamic configs
// TODO: Add link
const vuetifyConfig = (state: any) => ({
  props: {
    'error-messages': state.errors
  }
})

const name = defineComponentBinds('name', vuetifyConfig)
const email = defineComponentBinds('email', vuetifyConfig)
const password = defineComponentBinds('password', vuetifyConfig)
const passwordConfirm = defineComponentBinds('passwordConfirm', vuetifyConfig)
const terms = defineComponentBinds('terms', vuetifyConfig)

const onSubmit = handleSubmit((values) => {
  console.log('Submitted with', values)
})
</script>

<template>
  <v-form @submit="onSubmit" class="px-4">
    <v-text-field v-bind="name" label="Name" />
    <v-text-field v-bind="email" label="Email" type="email" />
    <v-text-field v-bind="password" label="Password" type="password" />
    <v-text-field v-bind="passwordConfirm" label="Password confirmation" type="password" />

    <v-checkbox v-bind="terms" label="Do you agree?" color="primary" />

    <v-btn color="primary" type="submit"> Submit </v-btn>
    <v-btn color="outline" class="ml-4" @click="resetForm()"> Reset </v-btn>
  </v-form>
</template>
