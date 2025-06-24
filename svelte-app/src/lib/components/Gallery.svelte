<script>
    import { onMount } from 'svelte';
      // import base to prefix local paths
    import { base } from '$app/paths';
    import { allItems } from '$lib/data/galleryData.js';

    let items = [...allItems];

  let activeCategory = 'All'; // Track the active category

  // Function to handle category filter selection
  function filterByCategory(style) {
    activeCategory = style;
    
    if (style === 'All') {
      items = [...allItems]; // Show all items
    } else {
      // Filter items based on style (case-insensitive comparison)
      items = allItems.filter(item => 
        item.style.toLowerCase() === style.toLowerCase()
      );
    }
  }

</script>

  <!-- Category filters -->
  <div class="category-filters">
    <button 
      class={activeCategory === 'Všechny Fotky' ? 'active' : ''} 
      on:click={() => filterByCategory('Všechny Fotky')}
    >Všechny Fotky</button>
    <button 
      class={activeCategory === 'Exterier' ? 'active' : ''} 
      on:click={() => filterByCategory('Exterier')}
    >Exterier</button>
    <button 
      class={activeCategory === 'Miminka' ? 'active' : ''} 
      on:click={() => filterByCategory('Miminka')}
    >Miminka</button>
    <button 
      class={activeCategory === 'Rodinné Foto' ? 'active' : ''} 
      on:click={() => filterByCategory('Rodinné Foto')}
    >Rodinné Foto</button>
    <button 
      class={activeCategory === 'Školní Foto' ? 'active' : ''} 
      on:click={() => filterByCategory('Školní Foto')}
    >Školní Foto</button>
    <button 
      class={activeCategory === 'Svatby' ? 'active' : ''} 
      on:click={() => filterByCategory('Svatby')}
    >Svatby</button>
    <button 
      class={activeCategory === 'Těhotné' ? 'active' : ''} 
      on:click={() => filterByCategory('Těhotné')}
    >Těhotné</button>
    
    
  </div>

<div id="gallery">

    {#if items.length === 0}
      <div class="no-items-message">
        <p>No items found in the "{activeCategory}" category.</p>
      </div>
    {/if}
  
    {#each items as item (item.id)}
      <div class="specific-item">
  
        <div class="image">
          
            <img src={base}{item.image} alt={item.title}>
        
        </div>
  
      </div>
    {/each}
  
  </div>

  <style>
    .category-filters 
    {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .category-filters button {
  background: none;
  border: 1px solid #505050;
  padding: 0.5rem 1.2rem;
  border-radius: 25px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: var(--font-family-heading);
}

.category-filters button:hover {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--background-color);
}

/* Active button styles */
.category-filters button.active {
  background-color: var(--primary-color);
  color: #fff;
  border-color: var(--primary-color);
}

  .no-items-message {
  text-align: center;
  width: 100%;
  padding: 2rem;
  font-family: var(--font-family-paragraph);
  font-size: 1.2rem;
  color: var(--primary-color);
}

  #gallery /* Flexbox for Dynamic Layout */
  {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

    gap: 1.5rem;
    justify-content: center;
    margin-top: 2rem;
    margin-left: 10rem;
    margin-right: 10rem;
    margin-bottom: 5rem;
    
  }

  .specific-item
{ 
    display: grid;
    grid-template-columns: 2fr;
    gap: 1rem;
    
}


.image {
    overflow: hidden;
    padding: 1rem 1rem 0 1rem;
  }
  
.image img{
    display: block;
    border-radius: 5px;
    max-width: 100%;
    width: 100%;
    height: auto;
    object-fit: contain; /* Ensures the whole image is visible */
    box-shadow: 0 0 20px 8px rgba(100, 100, 100, 0.15);
  }

/* Responsive styles for tablet */
@media (max-width: 992px) {
    #gallery {
      margin: 2rem 1rem;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }
    
    .specific-item {
      width: 85%;
    }
    
    .image img {
      max-width: 100%;
    }
    
  }

  /* Responsive styles for mobile */
  @media (max-width: 768px) {
    .category-filters {
      flex-wrap: wrap;
      gap: 0.7rem;
    }
    
    #gallery {
      margin: 1.5rem 0.5rem;
      grid-template-columns: 1fr;
    }
    
    .specific-item {
      width: 100%;
      max-width: 100%;
    }
    
    .image {
      padding: 0.8rem 0.8rem 0 0.8rem;
    }
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    .category-filters button {
      padding: 0.4rem 0.8rem;
      font-size: 0.8rem;
    }
  }

  </style>