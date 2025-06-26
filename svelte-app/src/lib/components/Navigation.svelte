<script>
    import { base } from '$app/paths';
</script>


<nav class="nav">
    
    <ul class="left-section">
        
        <li><a href="{base}/Fotogalerie" data-text="Fotogalerie">Fotogalerie</a></li>
        
        
    </ul>
    
    <ul class="middle-section">
        
        <li><a href="{base}/" data-text="Home">Fotoatelier - Pavla</a></li>
        
    </ul>

    <ul class="right-section">
        
        <li><a href="{base}/Cenik" data-text="Fotogalerie">Cenik</a></li>
        <li><a href="{base}/Kontakt" data-text="Fotogalerie">Kontakt</a></li>
        
    </ul>

</nav>

<style>

    .left-section {
        justify-self: start;
    }

    .middle-section {
        justify-self: center;
    }

    .right-section {
        justify-self: end;
    }

    .left-section a{
        font-family: var(--font-family-paragraph);
        font-size: 2rem;
        font-weight: 400;
        font-style: bold;
        padding-right: 1rem;
    }

    .middle-section a{
        font-family: var(--font-family-heading);
        font-size: 2.5rem;
        font-weight: 400;
        font-style: bold;
        margin: 0 15px;
    }

    .right-section a{
        font-family: var(--font-family-paragraph);
        font-size: 2rem;
        font-weight: 400;
        font-style: bold;
        margin: 0 15px;
    }

    .nav {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        width: 100%;
        justify-content: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        padding: 1rem;
    }

    nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
    }

</style>
