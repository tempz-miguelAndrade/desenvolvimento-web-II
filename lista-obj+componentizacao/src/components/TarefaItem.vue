<script setup>
defineProps({ item: { type: Object, required: true }})
defineEmits(['deletar', 'editar', 'concluir'])
</script>

<template>
  <li :class="{ concluida: item.status === 'concluida' }">
    {{ item.tarefa }}
    <button @click="$emit('deletar', item)" class="exc">Excluir</button>
    <button @click="$emit('editar', item)" class="edit">Editar</button>
    <button @click="$emit('concluir', item)" class="conc">Concluir</button>
  </li>
</template>

<style scoped>
.concluida {
  text-decoration: line-through;
  color: rgb(52, 234, 52);
}

li {
  color: rgb(241, 62, 62);
  margin-bottom: 10px;
}

button {
  margin-left: 8px;
}
</style>
