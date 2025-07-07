<script>
import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';
  import { base } from '$app/paths';
</script>



<h1>Kontakt</h1>

<table class="price-table">
  <tbody>
    <tr>
      <td><b>Adresa:</b> Jinačovice 111</td>
    </tr>
    <tr>
      <td><b>Telefon:</b> +420 728 653 494 </td>
    </tr>
    <tr>
      <td><b>E-mail:</b> pavla.chrapava@seznam.cz</td>
    </tr>
  </tbody>
</table>

<ul>
  <li><a href="https://www.facebook.com/ChrapavaPavla/?locale=cs_CZ" target="_blank" rel="noopener noreferrer"><img src="{base}/facebookLogo.png" alt="facebookIcon" /></a></li>
  <li><a href="https://www.instagram.com/fotoatelier.pavla/" target="_blank" rel="noopener noreferrer"><img src="{base}/instagramLogo.png" alt="instagramIcon" /></a></li>
</ul>


<style>

  ul img{
    display: inline-block;
    max-width: 5rem;
    width: 100%;
    height: auto;
  }

  ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ul li {
        margin: 0 15px;
        transition: transform 0.3s ease;
    }
    

    ul li:hover{
      transform: translateY(-5px);
    }

  h1{
    font-family: var(--font-family-heading);
    font-size: 2.5rem;
    font-weight: 400;
    font-style: bold;
  }

  .price-table {
  width: 100%;
  max-width: 40rem;
  margin: 2rem auto;
  border-collapse: collapse;
  overflow: hidden;
}

.price-table td {
  padding: 0.5rem;
  text-align: center;
  border-bottom: 1px solid var(--primary-color);
}


.price-table tr:last-child td {
  border-bottom: none;
}

@media (max-width: 600px) {
  .price-table, .price-table tbody, .price-table td, .price-table tr {
    display: block;
    width: 100%;
  }
  .price-table tr {
    margin-bottom: 1rem;
  }
  .price-table td {
    padding: 0.7rem;
    text-align: left;
  }
}
    
</style>