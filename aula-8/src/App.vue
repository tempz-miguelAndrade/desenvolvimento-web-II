<script setup>
  import { ref, computed } from 'vue'

  const nome = ref('')
  const sobrenome = ref('')

  const nomeCompleto = computed(() => {
    console.log('Calculando nome completo...')
    nomeCompleto.value = nome.value + sobrenome.value
    return `${nome.value} ${sobrenome.value}`
  })
</script>

<template></template>

<style scoped></style>
