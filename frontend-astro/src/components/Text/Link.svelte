{#if text}
    <svelte:element {href} this={tag} class="{twClasses}">
        {text}
    </svelte:element>
{/if}

<script lang="ts">
    // Exports
    export let href: string
    export let text: string
    export let sRoot: string = ''
    export let vSize: string = 'md'
    export let vColor: string = 'primary'
    export let vStyle: string = 'button'

    // Internal
    const tag: 'button' | 'a'  = href ? 'a' : 'button'
    const cc: ICompClasses = {
        root: 'font-bold',
        rootCustom: sRoot,
        size: {
            sm: 'px-2 py-1',
            md: 'px-4 py-2',
            lg: 'px-6 py-3',
        },
        color: {
            primary: 'bg-red-500 text-white',
            secondary: 'bg-blue-500 text-white',
            gray: 'bg-gray-500 text-white'
        },
        style: {
            button: 'rounded',
            pill: 'rounded-full',
            inline: '',
        }
    }

    const twClasses = `${cc.root} ${cc.rootCustom} ${cc.size[vSize]} ${cc.color[vColor]} ${cc.style[vStyle]}`
</script>
