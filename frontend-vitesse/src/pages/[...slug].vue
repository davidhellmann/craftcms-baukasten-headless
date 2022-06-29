<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    <pre>
      <code>
        Route: {{ $route.params }}
      </code>
    </pre>
  </div>
</template>
