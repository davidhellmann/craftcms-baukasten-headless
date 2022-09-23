<template>
  <div :key="$route.fullPath">
    <HeaderDefault/>

    <main class="container py-8">
      <slot/>
    </main>

    <FooterDefault/>
  </div>
</template>

<style lang="postcss">
.page-enter-active {
  transition: all 300ms cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.page-leave-active {
  transition: all 150ms cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.page-enter-from,
.page-leave-to {
  /*transform: translateY(20px);*/
  opacity: 0;
}

/*.layout-enter-active {
  transition: all 0.1s ease-out;
}
.layout-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.layout-enter-from,
.layout-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}*/
</style>
