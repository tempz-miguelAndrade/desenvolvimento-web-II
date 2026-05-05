<script setup>
defineProps(['id', 'nome', 'preco', 'categoria'])

import ButtonChild from '../ButtonChild.vue'
import { formataPreco } from '@/utilis/produtoUtilis'
import { ref } from 'vue'

const novoPreco = ref(0)
</script>

<template>
  <div class="overlay">
    <div class="produto-dialog">
      <h2>{{ nome }}</h2>
      <p>Preço: {{ formataPreco(preco) }}</p>
      <p>Categoria: {{ categoria }}</p>
      <input type="number" v-model.number="novoPreco" />
      <ButtonChild>Corrigir preço</ButtonChild>
      <ButtonChild>Cancelar</ButtonChild>
    </div>
  </div>
</template>

<style scoped></style>
