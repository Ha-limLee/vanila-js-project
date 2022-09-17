import { Component } from "../util/Component.js";

// @ts-check
class ShopList extends Component {
    constructor() {
        super();
        this.state = {
            display: "none"
        }
    }

    toggle = () => {
        if (this.state.display) {
            this.setState({ ...this.state, display: "" });
        } else {
            this.setState({ ...this.state, display: "none" });
        }
    }

    get events() {
        return [__ => __.querySelector("#city").addEventListener("click", this.toggle)];
    }

    get template() {
        /** @type{[]} */
        const regions = JSON.parse(this.getAttribute("regions") || "[]");
        
        return `
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
    }
}

customElements.define("shop-list", ShopList);
