<script lang="ts" setup>
const colorMode = useColorMode()
</script>

<template>
  <div>
    <ColorScheme placeholder="..." tag="span">
      <select class="bg-transparent"
              v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>

      <template v-if="$colorMode.preference === 'system'">
        {{ $colorMode.value }}
      </template>
    </ColorScheme>
  </div>
</template>
