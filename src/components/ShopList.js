import { Component } from "../util/Component.js";

// @ts-check
class ShopList extends Component {
    constructor() {
        super();
        this.init(this);
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

    render = () => {
        /** @type{[]} */
        const regions = JSON.parse(this.getAttribute("regions") || "[]");
        const html = `
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
        // if (shadow) {
        //     shadow.innerHTML = `
        //         <style>
        //             ul {
        //                 list-style: none;
        //             }
        //             a {
        //                 text-decoration: none;
        //                 color: black;
        //             }
        //         </style>
        //         <ul>
        //             <div id="city">
        //                 ${this.getAttribute("city")}
        //             </div>
        //             ${regions.map(x => `<li style="display: ${this.state.display}"><a href="#">${x}</a></li>`).join("")}
        //         </ul>
        //     `;
        //     shadow.querySelector("#city")?.addEventListener("click", this.toggle);
        // }

        return {
            html: html,
            events: [(root) => { console.log(root.querySelector("#city")); root.querySelector("#city").addEventListener("click", this.toggle) }]
        };
    }
}

customElements.define("shop-list", ShopList);
