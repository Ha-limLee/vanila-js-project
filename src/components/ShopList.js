// @ts-check

class ShopList extends HTMLElement {
    constructor() {
        super();
        this.display = "none";
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ["display"];
    }

    connectedCallback() {
        /** @type{[]} */
        const regions = JSON.parse(this.getAttribute("regions") || "[]");
        console.log(regions);
        const shadow = this.shadowRoot;
        if (shadow)
            shadow.innerHTML = `
                <ul>
                    <div id="city">
                        ${this.getAttribute("city")}
                    </div>
                    ${regions.map(x => `<li style="display: ${this.display}"><a href="#">${x}</a></li>`).join("")}
                </ul>
            `;
        shadow?.querySelector("#city")?.addEventListener("click", this.toggle);
        console.log(shadow);
    }
    toggle = () => {
        if (this.display) {
            this.display = "";
        } else {
            this.display = "none";
        }
        console.log(this.display);
    }
}

customElements.define("shop-list", ShopList);
