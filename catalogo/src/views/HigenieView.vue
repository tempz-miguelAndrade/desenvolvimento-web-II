<script setup>
import { ref } from 'vue'
import { listaProdutos } from '@/data/produtos'

const produtos = ref(listaProdutos)
produtos.value = produtos.value.filter((p) => p.categoria === 'Higenie')
</script>

<template>
  <div class="container">
    <h1>Brinquedos</h1>
    <div class="produtos">
      <div v-for="produto in produtos" :key="produto.id" class="produto-card">
        <img src="" class="produto-imagem" />
        <h2>{{ produto.nome }}</h2>
        <p>preço {{ produto.preco.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
