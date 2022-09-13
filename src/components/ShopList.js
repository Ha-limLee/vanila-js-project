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

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    toggle = () => {
        if (this.display) {
            this.setAttribute("display", "");
        } else {
            this.setAttribute("display", "none");
        }
    }

    render() {
        /** @type{[]} */
        const regions = JSON.parse(this.getAttribute("regions") || "[]");
        const shadow = this.shadowRoot;
        if (shadow) {
            shadow.innerHTML = `
                <style>
                    ul {
                        list-style: none;
                    }
                    a {
                        text-decoration: none;
                        color: black;
                    }
                </style>
                <ul>
                    <div id="city">
                        ${this.getAttribute("city")}
                    </div>
                    ${regions.map(x => `<li style="display: ${this.display}"><a href="#">${x}</a></li>`).join("")}
                </ul>
            `;
            shadow.querySelector("#city")?.addEventListener("click", this.toggle);
        }
    }
}

customElements.define("shop-list", ShopList);
