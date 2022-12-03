class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <!--Logo-->
                <a class="logo" href="..">Anchr</a>
                <nav>
                    <!--Hidden btn-->
                    <input type="checkbox" id="btn-nav">
                    <!--Hamburger btn-->
                    <label  for="btn-nav" class="tri"><a class="material-symbols-outlined menu-btn">menu</a></label>
                    <label  for="btn-nav" class="x"><a class="material-symbols-outlined menu-btn">close</a></label>
                    <!--Nav List-->
                    <ul class="nav-list">
                        <li class="nav-item">
                            <a class="nav-link" href="../pages/menu.html">Menu</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../pages/locations.html">Locations</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../pages/catering.html">Catering</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../pages/booking.html">Booking</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../pages/accessibility.html">Accessibility</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../pages/topical.html">Topical</a>
                        </li>
                    </ul>
                </nav>
            </header>
        `
    }
}
customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div>
                    <p>Copyright © 2022 by Anchr.</p>
                    <p>Rights Reserved.</p>
                    <p>Anchr is Powered by Cloudflare.</p>
                </div>
                <div class="socials-div">
                    <a href="https://www.facebook.com" class="fa fa-facebook socials"></a>
                    <a href="https://www.instagram.com" class="fa fa-instagram socials"></a>
                    <a href="https://www.google.com" class="fa fa-google socials"></a>
                    <a href="https://youtu.be/dQw4w9WgXcQ" class="fa fa-youtube socials"></a>
                </div>
            </footer>
        `
    }
}
customElements.define('my-footer', MyFooter)

class MyMetadata extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <meta charset="UTF-8">
            <meta name="description" content="DATA1200-Final-Assignment">
            <meta name="keywords" content="HTML, CSS, JavaScript">
            <meta name="author" content="Anchr">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        `
    }
}
customElements.define('my-metadata', MyMetadata)

class MyStyle extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <link href="../css/style.css" rel="stylesheet" type="text/css">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        `
    }
}
customElements.define('my-style', MyStyle)