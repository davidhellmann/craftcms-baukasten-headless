{#if text}
    <svelte:element this={tag} class="{twClasses}">
        {text}
    </svelte:element>
{/if}

<script lang="ts">
    // Exports
    export let text: string
    export let tag = 'h2' 
    export let sRoot: string = ''
    export let vSize: string = 'h2'

    // Internal
    const cc: ICompClasses = {
        root: 'font-bold',
        rootCustom: sRoot,
        size: {
            mega: 'text-9xl',
            h1: 'text-4xl',
            h2: 'text-3xl',
            h3: 'text-2xl',
            h4: 'text-xl',
            h5: 'text-lg',
            h6: 'text-base',
        }
    }

    const twClasses = `${cc.root} ${cc.rootCustom} ${cc.size[vSize]}`
</script>
