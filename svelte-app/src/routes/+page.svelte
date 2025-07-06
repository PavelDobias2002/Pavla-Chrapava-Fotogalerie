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
      <ul>
        <li><h1>Fotoatelier - Pavla</h1></li>
        <li>rodinné foto</li>
        <li>svatební foto</li>
        <li>dětské foto</li>
        <li>portretní foto</li>
        <li>těhotenské foto</li>
      </ul>
  </div>

  <p>
    
    Jmenuji se Pavla Chrápavá, jsem fotografka, která miluje zachycovat ty nejkrásnější momenty života - od prvních krůčků dětí, přes rodinné radosti, až po chvíle lásky na svatbách. <br> 
    
    Když se dívám na své fotografie, často si vzpomenu na slova, která říkají: <br><i>"Každý okamžik je jako květina - chvilka a zvadnou, ale v našich srdcích a fotografiích zůstávají navždy."</i>

.</p>
  
</div>

<style>
  



  .section-header{
        display: grid;
        grid-template-rows: auto;

        text-align: center;
        margin-bottom: 2rem;
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
      color: var(--primary-color);
    }
  
    .section-header p {
      font-family: var(--font-family-paragraph);
      font-size: 1.5rem;
      border-top: 1px solid var(--primary-color);
      padding:1rem;
      
    }

    .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem; 
    margin-bottom: 1rem;
  }
  
  .logo img {
    max-width: 25%;
    width: 25%;
    height: auto;
    border-radius: 50%;
  }

  .logo ul {
  list-style: disc;
  padding-left: 1.2em;
  margin: 0;
  font-size: 1.3rem;
  text-align: left;
  padding-bottom:0.5rem;
}

.logo ul li:first-child {
  list-style: none;
  padding-left: 0;
  padding-top:0.5rem;

}

  


  

  /* Tablets */
@media (max-width: 992px) {
  .section-header {
    max-width: 90%;
    padding: 0 1rem;
  }
  .section-header h1 {
    font-size: 2rem;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .section-header {
    max-width: 100%;
    padding: 0 0.5rem;
  }
  .section-header h1 {
    font-size: 1.6rem;
    padding: 0 0.5rem;
  }
  .section-header p {
    font-size: 1.1rem;
    padding: 0.7rem;
  }
  .logo {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  .logo img {
    max-width: 70vw;
    min-width: 60px;
  }
  .logo ul {
    font-size: 1.1rem;
    text-align: center;
    padding-left: 0;
  }
}

/* Extra small screens */
@media (max-width: 480px) {
  .section-header h1 {
    font-size: 1.2rem;
  }
  .logo img {
    max-width: 120px;
    width: 60vw;
  }
}

</style>
