<script setup>
import { ref } from 'vue'
import { listaProdutos } from './data/produtos'

import ProdutoChild from './components/ProdutoChild.vue'
import ButtonChild from './components/ButtonChild.vue'

const produtos = ref(listaProdutos)
const alterando = ref(true)
const preco = ref(0)

function salvarPreco() {
  alert('teste')
}
</script>

<template>
  <div class="container">
    <h1>Catálogo de Produtos</h1>
    <div>
      <ul>
        <ProdutoChild
          v-for="produto in produtos"
          :key="produto.id"
          :id="produto.id"
          :nome="produto.nome"
          :preco="produto.preco"
          :categoria="produto.categoria"
        ></ProdutoChild>
      </ul>
    </div>
    <div v-show="alterando">
      <label>preço</label>
      <input type="number" v-model.number="preco" />
      <ButtonChild @clique="salvarPreco()">Salvar</ButtonChild>
    </div>
  </div>
</template>

<style scoped></style>
