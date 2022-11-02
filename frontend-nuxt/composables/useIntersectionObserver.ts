// https://www.digitalocean.com/community/tutorials/vuejs-lazy-image

export const useIntersectionObserver = (image, threshold = 0.25) => {
  let observer = ref(null);

  onMounted(() => {
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => {
        const image = entries[0];
        if (image.isIntersecting) {
          const lazyItem = image.target as HTMLImageElement | HTMLSourceElement;

          if (lazyItem.nodeName === 'IMG') {
            lazyItem.src = lazyItem.dataset.src || lazyItem.src;
            if (lazyItem.dataset.srcset) {
              lazyItem.srcset = lazyItem.dataset.srcset;
            }
            lazyItem.sizes = `${lazyItem.getBoundingClientRect().width}px`;
          }

          if (lazyItem.nodeName === 'SOURCE') {
            if (lazyItem.dataset.srcset) {
              lazyItem.srcset = lazyItem.dataset.srcset;
            }
          }

          if (lazyItem.nodeName === 'IFRAME') {
            if (lazyItem.dataset.src) {
              lazyItem.src = lazyItem.dataset.src;
            }
          }

          lazyItem.classList.remove('lazyload');
          lazyItem.classList.add('lazyloaded');

          const parentNode: HTMLElement | null = lazyItem.parentElement;
          if (parentNode?.style?.backgroundColor) {
            setTimeout(() => {
              parentNode.style.backgroundColor = 'transparent';
            }, 1000);
          }

          observer.unobserve(lazyItem);
          observer.disconnect()
        }
      }, { threshold })

      observer.observe(image.value);
    }
  })
}
