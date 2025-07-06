<script>
    import { base } from '$app/paths';
    let menuOpen = false;
    function toggleMenu() {
        menuOpen = !menuOpen;
    }
</script>


<nav class="nav">

    <button class="hamburger" on:click={toggleMenu} aria-label="Menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </button>
    
    <ul class="left-section">
        
        <li><a href="{base}/" data-text="Home">Fotoatelier - Pavla</a></li>
        
        
    </ul>
    
    <ul class="middle-section {menuOpen ? 'open' : ''}">

        <li><a href="{base}/Fotogalerie" data-text="Fotogalerie">Fotogalerie</a></li>

    </ul>

    <ul class="right-section {menuOpen ? 'open' : ''}">

        <li><a href="{base}/Cenik" data-text="Cenik">Cenik</a></li>
        <li><a href="{base}/Kontakt" data-text="Kontakt">Kontakt</a></li>

    </ul>

</nav>

<style>

    .left-section {
        justify-self: start;
        margin-left:15px;
    }

    .middle-section {
        justify-self: center;
    }

    .right-section {
        justify-self: end;
    }

    .left-section a{
        font-family: var(--font-family-heading);
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
        font-family: var(--font-family-heading);
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
        border-bottom: 1px solid var(--primary-color);
        border-top: 1px solid var(--primary-color);
        padding: 1rem;
        background-color: #ffffff;
    }

    nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
    }

    .hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    cursor: pointer;
    grid-column: 2;
    z-index: 1001;
}

.hamburger .bar {
    width: 28px;
    height: 3px;
    background: var(--primary-color, #333);
    margin: 4px 0;
    border-radius: 2px;
    transition: 0.3s;
}

    

</style>
