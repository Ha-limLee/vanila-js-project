import "./CafeAside.js";
import { Component } from "../util/Component.js";

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
        this.attachShadow({ mode: "open" });
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
        const src = document.createElement("script");
        src.src = "src/components/CafeMain.js";
        shadow.appendChild(src);
    }
    connectedCallback() {
    }
}

customElements.define("cafe-middle", CafeMiddle);