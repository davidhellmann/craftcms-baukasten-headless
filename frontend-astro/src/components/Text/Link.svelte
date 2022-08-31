<script lang="ts">
// Export Props
export let href: string | null = null;
export let text: string;
export let sRoot: string = '';
export let vSize: string = 'md';
export let vColor: string = 'primary';
export let vStyle: string = 'button';

// Internal
const tag: 'button' | 'a' = href ? 'a' : 'button';
const cc: ICompClasses = {
  root: 'font-bold',
  rootCustom: sRoot,
  size: {
    sm: 'px-2 py-1',
    md: 'px-4 py-2',
    lg: 'px-6 py-3',
  },
  color: {
    primary: 'bg-primary-500 text-white',
    secondary: 'bg-secondary-500 text-white',
    gray: 'bg-gray-500 text-white',
  },
  style: {
    button: 'rounded',
    pill: 'rounded-full',
    inline: '',
  },
};

const twClasses = `${cc.root} ${cc.rootCustom} ${cc.size[vSize]} ${cc.color[vColor]} ${cc.style[vStyle]}`;
</script>

{#if text}
  <svelte:element this="{tag}" href="{href}" class="{twClasses}">
    {text}
  </svelte:element>
{/if}
