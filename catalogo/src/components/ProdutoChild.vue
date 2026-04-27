<script setup>
import ButtonChild from './ButtonChild.vue'
defineProps(['id', 'nome', 'preco', 'categoria'])
</script>

<template>
  <li>
    {{ nome }} - R$ {{ preco }} ({{ categoria }})
    <ButtonChild>Corrigir Preço</ButtonChild>
  </li>
</template>

<style scoped></style>
