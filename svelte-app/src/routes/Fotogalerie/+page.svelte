<script>
import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';
  import Gallery from '$lib/components/Gallery.svelte';
  import { base } from '$app/paths';
</script>



<h1>Fotogalerie</h1>

<Gallery />

<style>

  h1{
    font-family: var(--font-family-heading);
    padding-bottom: 1rem;
  }
    
</style>