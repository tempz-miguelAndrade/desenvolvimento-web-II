<script setup>
defineProps(['id', 'status'])
defineEmits(['clique'])
</script>

<template>
  <li>
    <slot></slot> | {{ status }}
    <button @click="$emit('clique', status )">Mensagem</button>
  </li>
</template>

<style scoped></style>
