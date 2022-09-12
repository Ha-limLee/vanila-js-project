import "./CafeAside.js";
import "./CafeMain.js";

const style = `
    #middle {
        margin: auto;
        height: 1450px;
        max-width: 1000px;
    }
`;

class CafeMiddle extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback() {
        const shadow = this.shadowRoot;
        shadow.innerHTML = `
            <style>
                ${style}
            </style>
            <div id="middle">
                <cafe-aside></cafe-aside>
                <cafe-main></cafe-main>
            </div>
        `;
    }
}

customElements.define("cafe-middle", CafeMiddle);