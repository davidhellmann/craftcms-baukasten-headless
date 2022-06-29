<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    Route
    {{ $route.params }}
  </div>
</template>
