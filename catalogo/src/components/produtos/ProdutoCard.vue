<script setup>
defineProps(['id', 'nome', 'preco', 'imagem', 'categoria'])

import { ref } from 'vue'
import ButtonChild from '../ButtonChild.vue'
import ProdutoDialog from './ProdutoDialog.vue'
import { formataPreco } from '@/utilis/produtoUtilis'

const mostrarDialog = ref(false)
const emit = defineEmits(['atualizarpreco'])

function corrigirPreco(id, preco) {
  emit('atualizarpreco', id, preco)
  mostrarDialog.value = false
}
</script>

<template>
  <div class="produto-card">
    <div>
      <h2>{{ nome }}</h2>
      <p>Preço: {{ formataPreco(preco) }}</p>
    </div>
    <div>
      <img :src="imagem" class="produto-imagem" />
      <ButtonChild @clique="mostrarDialog = true">Editar</ButtonChild>
      <ProdutoDialog
        v-if="mostrarDialog"
        :nome="nome"
        :id="id"
        :preco="preco"
        :categoria="categoria"
        @fechar="mostrarDialog = false"
      />
    </div>
  </div>
</template>

<style scoped>
.produto-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
  text-align: center;
  gap: 30px;
}

img {
  height: 5vw;
  width: 5vw;
}
</style>
