<script setup>
defineProps(['nome', 'tipo', 'basic'])

defineEmits(['clique'])
</script>

<template>
  <button :class="[basic, tipo]" @click.prevent="$emit('clique', nome)">
    <slot></slot>
  </button>
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
</style>
