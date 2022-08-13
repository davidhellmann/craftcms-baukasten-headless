<script lang="ts">
	export let sectionHandle:string;
	export let entryType:string;

	import {useSetSectionAndEntryType} from '@composables/useSetSectionAndEntryType'

	const finalEntryType = useSetSectionAndEntryType({ handle: sectionHandle, type: entryType})
</script>

<div>
	<svelte:component this={finalEntryType} client:load />
</div>

