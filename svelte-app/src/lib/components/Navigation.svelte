<script>
    import { base } from '$app/paths';
    
</script>


<nav class="nav">

        <ul class="left-section">
            <li><a href="{base}/" data-text="Home">Fotoatelier - Pavla</a></li>
        </ul>
        <ul class="middle-section">
            <li><a href="{base}/Fotogalerie" data-text="Fotogalerie">Fotogalerie</a></li>
        </ul>

        <ul class="right-section">
            <li><a href="{base}/Cenik" data-text="Cenik">Cenik</a></li>
            <li><a href="{base}/Kontakt" data-text="Kontakt">Kontakt</a></li>
        </ul>
    

    <!--
    <ul class="middle-section {menuOpen ? 'open' : ''}">

        <li><a href="{base}/Fotogalerie" data-text="Fotogalerie">Fotogalerie</a></li>

    </ul>

    <ul class="right-section {menuOpen ? 'open' : ''}">

        <li><a href="{base}/Cenik" data-text="Cenik">Cenik</a></li>
        <li><a href="{base}/Kontakt" data-text="Kontakt">Kontakt</a></li>

    </ul>
-->
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

     /* Navigation links styling */
    nav a {
        text-decoration: none;
        color: var(--primary-color, #333);
        transition: color 0.3s, transform 0.3s;
        display: inline-block;
    }

    nav a:hover {
        color: var(--secondary-color);
        transform: translateY(-2px);
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

    /* Media query for responsive design */
    @media (max-width: 768px) {
        .nav {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto;
            padding: 0.2rem;
            row-gap: 0.2rem;
            justify-items: center;
        }
        
    .left-section,    
    .middle-section,
    .right-section {
        justify-self: center;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .middle-section, .right-section {
        grid-template-columns: 1fr;
        align-items: center;
        width: 100%;
    }

    .middle-section li, .right-section li {
        margin: 10px 0;
        width: 100%;
        text-align: center;
    }

    .middle-section a, .right-section a {
        margin: 0;
        display: block;
        width: 100%;
    }

    .left-section a {
        font-size: 1.6rem;
    }

    .middle-section a {
        font-size: 2rem;
    }

    .right-section a {
        font-size: 1.6rem;
    }
    }

</style>
