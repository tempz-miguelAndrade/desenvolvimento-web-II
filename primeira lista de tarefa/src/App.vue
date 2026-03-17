<script setup>
  import { ref } from 'vue';

  const tarefas = ref([
    {texto: "seminário", status: "concluida"},
    {texto: "trabalho", status: "concluida"},
    {texto: "comer", status: "pendente"},
    {texto: "dormir", status: "pendente"}
  ]);
  const novaTarefa = ref('');

  function adicionarTarefa() {
  tarefas.value.push( {texto: novaTarefa.value, status: "pendente"} );
  novaTarefa.value = '';
  }

  function removerTarefa(Item) {
    let index = tarefas.value.findIndex( (e) => e == Item);
    tarefas.value.splice(index, 1);
  }

  function marcarConcluida(tarefa) {
    tarefa.status = tarefa.status === 'concluida' ? 'pendente' : 'concluida';
  }
</script>



<template>
  <div class="container">
      <h1>Lista de tarefas</h1>

      <input type="text" placeholder="Insira uma tarefa" v-model="novaTarefa">
      <button @click="adicionarTarefa">Adicionar</button>

      <ul>
        <li v-for="tarefa in tarefas" :key="tarefa.texto" :class="{concluida: tarefa.status == 'concluida'}"
            @click='marcarConcluida(tarefa)'>
            {{ tarefa.texto }}
            <button @click="removerTarefa(tarefa)">X</button>

        </li>
      </ul>

  </div>
</template>



<style scoped>
  li {
    cursor: pointer;
  }

  .concluida {
    color: green;
    text-decoration: line-through;
  }


</style>
