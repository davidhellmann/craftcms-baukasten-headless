<script lang="ts">
  import {setCompVariants} from '@/utils/setCompVariants';

  // Types
  type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
  type Size = 'default' | '9xl' | '8xl' | '7xl' | '6xl' | '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'base' | 'sm' | 'xs';
  type Weight = 'default' | 'extrabold' | 'bold' | 'semibold' | 'normal';

  // Props
  export let text: string;
  export let rootClasses: string = '';
  export let tag: Tag = 'h2';
  export let size: Size = 'default';
  export let weight: Weight = 'bold';
  export let center: boolean = false;

  // Settings
  const cs: IComponentSettings = {
    name: 'Headline',
    root: 'relativ',
    rootClasses,
    variants: {
      size: {
        DEFAULT: 'text-3xl',
        '9xl': 'text-9xl tracking-tighter',
        '8xl': 'text-8xl',
        '7xl': 'text-7xl',
        '6xl': 'text-6xl',
        '5xl': 'text-5xl',
        '4xl': 'text-4xl',
        '3xl': 'text-3xl',
        '2xl': 'text-2xl',
        xl: 'text-xl',
        lg: 'text-lg',
        base: 'text-base',
        sm: 'text-sm',
        xs: 'text-xs',
      },
      weight: {
        DEFAULT: 'font-bold',
        extrabold: 'font-extrabold',
        bold: 'font-bold',
        semibold: 'font-semibold',
        medium: 'font-medium',
        normal: 'font-normal',
      },
    },
  };

  // Classes
  const cc: IComponentClasses = {
    root: `${cs.root} ${cs.rootClasses} ${setCompVariants(cs.variants, {size, weight})} ${center ? 'text-center' : ''}`,
  };

  // Tag
  const TagName = tag;
</script>

{#if text && TagName}
  <svelte:element this={TagName} class={cc.root}>
    {text}
  </svelte:element>
{/if}

