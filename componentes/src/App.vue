<script setup>
import { ref } from 'vue'
let acoes = ref([
  { id: 1, nome: 'Novo', tipo: 'novo' },
  { id: 2, nome: 'Editar', tipo: 'editar' },
  { id: 3, nome: 'Salvar', tipo: 'salvar' },
  { id: 4, nome: 'Cancelar', tipo: 'cancelar' },
  { id: 5, nome: 'Excluir', tipo: 'excluir' },
])
import ButtonChild from './components/ButtonChild.vue'

function cliqueBotao(mensagem) {
  alert(`Clicado no botão ${mensagem}`)
}
</script>

<template>
  <div class="container">
    <div>
      <ButtonChild :basic="'btn'" :tipo="'salvar'">Salvar</ButtonChild>
      <ButtonChild :basic="'btn'" :tipo="'cancelar'">Cancelar</ButtonChild>
    </div>
    <div>
      <ButtonChild :basic="'btn'" :tipo="'alerta'">Alerta</ButtonChild>
    </div>
    <div>
      <ButtonChild
        v-for="acao in acoes"
        :key="acao.id"
        :basic="'btn'"
        :tipo="acao.tipo"
        :nome="acao.nome"
        @clique="cliqueBotao(acao.nome)"
        >{{ acao.nome }}</ButtonChild
      >
    </div>
  </div>
</template>

<style scoped>
.btn {
  background-color: gray;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin: 1px;
}
.btn.salvar {
  background-color: green;
  color: white;
}
.btn.cancelar {
  background-color: red;
  color: white;
}
.btn.alerta {
  background-color: yellow;
  color: black;
}
.btn.novo {
  background-color: blue;
  color: white;
}
.btn.editar {
  background-color: orange;
  color: white;
}
.btn.excluir {
  background-color: black;
  color: white;
}
</style>
