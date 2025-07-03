<script>
import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';
  import { base } from '$app/paths';
</script>



<h1>Kontakt</h1>

<table class="price-table">
  <tbody>
    <tr>
      <td><b>Adresa:</b> Jinacovice 111</td>
    </tr>
    <tr>
      <td><b>Telefon:</b> +420 728 653 494 </td>
    </tr>
    <tr>
      <td><b>E-mail:</b> pavla.chrapava@seznam.cz</td>
    </tr>
  </tbody>
</table>


<style>

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
  border-bottom: 1px solid #eee;
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