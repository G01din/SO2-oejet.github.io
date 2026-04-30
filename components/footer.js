class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <head>
                <link href="style/footer.css" rel="stylesheet" type="text/css">
            </head>
            <div class="footer">
                <p>SO2 opgave</p>
                <br>
                <p>Lavet af: Elias, Gustav, Max & Mikkel</p>
            </div>
        `;
    }
}

customElements.define('footer-component', Footer);
