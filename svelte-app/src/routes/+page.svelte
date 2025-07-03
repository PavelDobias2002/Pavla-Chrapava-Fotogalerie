<script>
  import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';
  import Gallery from '$lib/components/Gallery.svelte';
  import { base } from '$app/paths';


  onMount(() => {
    console.log("Home Page Loaded");
  });

</script>

<div class="section-header">
        
  <div class="logo">
      <img src="{base}/logo.webp" alt="Logo" />
  </div>

  <p>Vítejte v mé Fotogalerie, jmenuji se Pavla Chrápavá.</p>
  
</div>

<style>
  



  .section-header{
        text-align: center;
        margin-bottom: 2rem;
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 50%;
        margin-left: auto;
        margin-right: auto;
    }

    .section-header h1 {
      font-family: var(--font-family-heading);
      font-size: 2.5rem;
      font-weight: 400;
      margin-bottom: 0.5rem;
    }
  
    .section-header p {
      font-family: var(--font-family-paragraph);
      font-size: 2rem;
      
    }

    .logo {
    display: inline-block;
    margin-bottom: 1rem;
  }
  
  .logo img {
    max-width: 50%;
    width: 50%;
    height: auto;
    transition: transform 0.3s ease, width 0.3s ease;
    border-radius: 50%;
  }
  
  .logo img:hover {
    transform: translateY(-10px);
  }

  

  /* Responsive styles for tablets */
  @media (max-width: 992px) {
    .section-header h1 {
      font-size: 2rem;
    }

    .logo img {
      max-width: 75%;
    }
  }

  /* Responsive styles for mobile */
  @media (max-width: 768px) {
    .section-header h1 {
      font-size: 1.6rem;
      padding: 0 1rem;
    }

    .logo img {
      max-width: 75%;
    }

  }

  /* Extra small screens */
  @media (max-width: 480px) {
    .section-header h1 {
      font-size: 1.4rem;
    }


    .logo img {
      max-width: 180px;
    }

  }

</style>
