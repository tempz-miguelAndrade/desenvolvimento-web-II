<script setup>
import { ref, computed } from 'vue'

const nome = ref('')
const sobrenome = ref('')
const texto = ref('')

const nomeCompleto = computed(() => {
  console.log('Calculando nome completo...')
  nomeCompleto.value = nome.value + sobrenome.value
  return `${nome.value} ${sobrenome.value}`
})

const nomeCompleto2 = () => {
  console.log(`Calculando nome completo 2...`)
  return `${nome.value} ${sobrenome.value}`
}
</script>

<template>
  <div class="container">
    <input type="text" v-model="nome" />
    <input type="text" v-model="sobrenome" />
    <label>Nome completo: {{ nomeCompleto }}</label>
    <label>Nome completo 2: {{ nomeCompleto2() }}</label>
    <input type="text" v-model="texto"/>
    <label>{{ texto }}</label>
  </div>
</template>

<style scoped></style>
