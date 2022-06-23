<script lang="ts" setup></script>

<template>
  <div>
    <slot name="header">
      <HeaderDefault/>
    </slot>

    <main class="container py-8">
      <slot/>
    </main>

    <slot name="header">
      <FooterDefault/>
    </slot>
  </div>
</template>

