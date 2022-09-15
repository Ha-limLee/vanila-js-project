// @ts-check

class ShopList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.state = {
            display: "none"
        };
    }

    static get observedAttributes() {
        return ["display"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (this.state.hasOwnProperty(name) && oldValue !== newValue) {
            this.state[name] = newValue;
            this.render();
        }
    }

    connectedCallback() {
        this.render();
    }

    toggle = () => {
        if (this.state.display) {
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
                    ${regions.map(x => `<li style="display: ${this.state.display}"><a href="#">${x}</a></li>`).join("")}
                </ul>
            `;
            shadow.querySelector("#city")?.addEventListener("click", this.toggle);
        }
    }
}

customElements.define("shop-list", ShopList);
