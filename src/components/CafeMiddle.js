import "./CafeAside.js";
import "./CafeMain.js";

class CafeMiddle extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback() {
        const shadow = this.shadowRoot;
        shadow.innerHTML = `
            <div id="middle">
                <cafe-aside></cafe-aside>
                <cafe-main></cafe-main>
            </div>
        `;
        const style = document.createElement("style");
        style.innerHTML = `
            #middle {
                margin: auto;
                height: 1450px;
                max-width: 1000px;
            }
        `;
        shadow.appendChild(style);
    }
}

customElements.define("cafe-middle", CafeMiddle);