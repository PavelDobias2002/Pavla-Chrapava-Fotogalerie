<script>
import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';
  import { base } from '$app/paths';
</script>


<div class="cenik-header">
<h1>Ceník - děti, portrét, těhotné a zvířata</h1>
<p>Platnost od 1.11.2021</p>
</div>

<table class="price-table">
  <thead>
    <tr>
      <th>Služba</th>
      <th>Popis</th>
      <th>Cena</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MALÁ KOLEKCE</td>
      <td>Obsahuje poslané fotografie s výběrem 15 ks upravených + 6 ks foto formátu 13x18</td>
      <td>950 Kč</td>
    </tr>
    <tr>
      <td>STŘEDNÍ KOLEKCE</td>
      <td>Obsahuje poslané fotografie s výběrem 30 ks upravených + 15 ks foto formátu 13x18</td>
      <td>1350 Kč</td>
    </tr>
    <tr>
      <td>VELKÁ KOLEKCE</td>
      <td>Obsahuje poslané fotografie s výběrem 45 ks upravených + 20 ks foto formátu 13x18</td>
      <td>1950 Kč</td>
    </tr>
  </tbody>
</table>

<div class="cenik-header">
<h1>Ceník - svatební foto</h1>
<p>Platnost od 1.11.2021</p>
</div>

<table class="price-table">
  <thead>
    <tr>
      <th>Služba</th>
      <th>Popis</th>
      <th>Cena</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>KOLEKCE MINI </td>
      <td>Fotografování příjezdu nevěsty a ženicha, svatebního obřadu, skupinek svatebčanů, focení novomanželů v parcích a zahradách. Délka fotografování cca 2 hodiny.
cena obsahuje: 30 ks upravených fotografiích formátu 13×18 + všechny nafocené snímky poslané na e-mail.
</td>
      <td>3500 Kč</td>
    </tr>
    <tr>
      <td>KOLEKCE STANDART </td>
      <td>Fotografování příjezdu nevěsty a ženicha, svatebního obřadu, skupinek svatebčanů, focení novomanželů v parcích a zahradách. Focení svatebních zvyků, začátku hostiny, momentky stavebních hostů, svatební tabule. Délka fotografování cca 4 hodiny.
cena obsahuje: 50 ks upravených fotografiích formátu 13×18 + všechny nafocené snímky poslané na e-mail.
</td>
      <td>4900 Kč</td>
    </tr>
    <tr>
      <td>KOLEKCE EXKLUSIVE </td>
      <td>Fotografování u kadeřníka, vizážisty, oblékání nevěsty, fotografování příjezdu nevěsty a ženicha, svatebního obřadu, skupinek svatebčanů, focení novomanželů v parcích a zahradách, focení svatebních zvyků, začátku hostiny, momentky stavebních hostů, svatební tabule, aut, průběh svatební hostiny, krájení dortů, prvního tance novomanželů. Délka fotografování cca 10 hodin.
cena obsahuje: 80 ks upravených fotografiích formátu 13×18 + všechny nafocené snímky poslané na e-mail.
</td>
      <td>7900 Kč</td>
    </tr>
  </tbody>
</table>

<div class="space"></div>

<style>

  .cenik-header{
    display: grid;
    grid-template-columns: auto;
  }

  .cenik-header p{
    font-family: var(--font-family-paragraph);
    font-style: italic;
  }


  .cenik-header h1{
    font-family: var(--font-family-heading);
    font-size: 2.5rem;
    font-weight: 400;
    font-style: bold;
  }

  .price-table {
  width: 100%;
  max-width: 55rem;
  margin: 2rem auto;
  border-collapse: collapse;
  background: #ffffff;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  border-radius: 12px;
  overflow: hidden;
}

.price-table th, .price-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #fff;
}

.price-table th {
  background: var(--primary-color, #f5f5f5);
  font-weight: 600;
  font-style: bold;
}

.price-table tr:last-child td {
  border-bottom: none;
}

.space{
  padding:2rem;
}

@media (max-width: 600px) {
  .price-table, .price-table thead, .price-table tbody, .price-table th, .price-table td, .price-table tr {
    display: block;
    width: 100%;
  }
  .price-table tr {
    margin-bottom: 1rem;
  }
  .price-table th, .price-table td {
    padding: 0.7rem;
    text-align: left;
  }
}
</style>