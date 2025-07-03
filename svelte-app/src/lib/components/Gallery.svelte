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

  //modal
  let showModal = false;
  let modalImage = null;

  function openModal(image) {
    modalImage = image;
    showModal = true;
  }

  function closeModal() {
    showModal = false;
    modalImage = null;
  }

</script>

  <!-- Category filters -->
  <div class="category-filters">
    <button 
      class={activeCategory === 'Exterier' ? 'active' : ''} 
      on:click={() => filterByCategory('Exterier')}
    >Exterier</button>
    <button 
      class={activeCategory === 'Miminka' ? 'active' : ''} 
      on:click={() => filterByCategory('Miminka')}
    >Miminka</button>
    <button 
      class={activeCategory === 'Rodinne' ? 'active' : ''} 
      on:click={() => filterByCategory('Rodinne')}
    >Rodinné Foto</button>
    <button 
      class={activeCategory === 'Skolni' ? 'active' : ''} 
      on:click={() => filterByCategory('Skolni')}
    >Školní Foto</button>
    <button 
      class={activeCategory === 'Svatby' ? 'active' : ''} 
      on:click={() => filterByCategory('Svatby')}
    >Svatby</button>
    <button 
      class={activeCategory === 'Tehotne' ? 'active' : ''} 
      on:click={() => filterByCategory('Tehotne')}
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
          
            <img src={item.image} alt={item.title} on:click={() => openModal(item.image)} style="cursor:pointer;">
        
        </div>
  
      </div>
    {/each}

    {#if showModal}
      <div class="modal-backdrop" on:click={closeModal}>
        <div class="modal-content" on:click|stopPropagation>
          <button class="close-btn" on:click={closeModal}>&times;</button>
          <img src={modalImage} alt="Full Image" />
        </div>
      </div>
    {/if}
  
  </div>

  <style>
    .modal-backdrop {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  background: transparent;
  padding: 1rem;
  border-radius: 10px;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content img {
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 10px;
  box-shadow: 0 0 40px 10px rgba(0,0,0,0.3);
  background: #fff;
}

.close-btn {
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  background: none;
  border: none;
  color: #fff;
  font-size: 2.5rem;
  cursor: pointer;
  z-index: 10;
}


    .category-filters 
    {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
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
    
    margin-top: 1rem;
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