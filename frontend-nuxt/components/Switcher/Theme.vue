<script lang="ts" setup>
const colorMode = useColorMode()
</script>

<template>
  <div>
    <ColorScheme placeholder="..." tag="span">
      <select class="bg-transparent text-xs font-bold bg-gray-400 text-white rounded-lg px-2 h-8"
              v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>

<!--      <template v-if="$colorMode.preference === 'system'">-->
<!--        {{ $colorMode.value }}-->
<!--      </template>-->
    </ColorScheme>
  </div>
</template>
