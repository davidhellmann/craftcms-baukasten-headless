import Alpine from 'alpinejs';
// import persist from '@alpinejs/persist'

const alpinejs = {
  init() {
    // eslint-disable-next-line no-console
    console.log('AlpineJS is ready');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.Alpine = Alpine;
    // Alpine.plugin(persist)
    Alpine.start();
  },
};

export default alpinejs;
