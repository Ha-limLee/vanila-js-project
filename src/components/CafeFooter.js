class CafeFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        const shaodw = this.shadowRoot;
        shaodw.innerHTML = `
            <footer>
                <ul>
                <li><a href="#">카페소개</a></li>
                <li><a href="#">개인정보처리방침</a></li>
                <li><a href="#">이용약관</a></li>
                <li><a href="#">오시는길</a></li>
                <li><a href="#">© SSAFY Corp.</a></li>
                </ul>
            </footer>
        `;

        const style = document.createElement("style");
        style.innerHTML = `
            footer {
                clear: left;
                margin-left: 220px;
                height: 40px;
                max-width: 1000px;
                padding: 0;
                
            }

            footer>ul {
                list-style: none;
            }

            footer li {
                margin-right: 10px;
                float: left;
            }
            
            footer li a {
                text-decoration: none;
                color: rgba(128, 128, 128, 0.6);
            }
        `;
        shaodw.appendChild(style);
    }
}

customElements.define("cafe-footer", CafeFooter);