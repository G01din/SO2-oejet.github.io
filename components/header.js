class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <head>
                <link href="style/header.css" rel="stylesheet" type="text/css">
            </head>
            <div class="header">
                <h1 onclick="home()">Øjet</h1>
                <img src="assets/icon.svg" alt="Eye" width="128px" onclick="home()">
            </div>
        `;
    }
}

customElements.define('header-component', Header);
