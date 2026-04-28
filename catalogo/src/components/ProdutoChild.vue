<script setup>
defineProps(['id', 'nome', 'preco', 'categoria'])
import { formataPreco } from '@/utilis/produtoUtils'
import ButtonChild from './ButtonChild.vue'
defineEmits(['corrigirpreco'])
</script>

<template>
  <li>
    {{ nome }} - R$ {{ formataPreco(preco) }} ({{ categoria }})
    <ButtonChild @clique="$emit('corrigirpreco', id)"> Corrigir Preço </ButtonChild>
  </li>
</template>

<style scoped></style>
