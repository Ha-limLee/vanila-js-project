class CafeHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        const shadow = this.shadowRoot;
        shadow.innerHTML = `
            <header id="header">
                <nav>
                <a href="#" id="logo">SSAFY BookCafe</a>
                <a id="announce" href="#">공지사항</a>
                <ul id="header-list">
                    <li id="login"><a href="./join.html">로그인</a></li>
                    <li id="signin"><a href="#">회원가입</a></li>
                    <li id="logout" style="display: none"><a href="#">로그아웃</a></li>
                    <li id="mypage" style="display: none"><a href="#">마이페이지</a></li>
                    <li id="admin" style="display: none"><a href="./poll.html" target="_blank">관리자</a></li>
                </ul>
                </nav>
            </header>
        `;
        const style = document.createElement("style");
        style.innerHTML = `
            ul {
                list-style: none;
            }

            header {
                box-shadow: 0px 0px 10px 0px rgba(100, 90, 50, 0.5);
                height: 70px;
                max-width: 10000px;
                margin-bottom: 10px;
            }
            
            header > nav {
                position: relative;
                margin: auto;
                max-width: 1000px;
                width: 100%;
                height: 70px;
            }
            
            #logo {
                color: rgba(128, 128, 128, 0.56);
                font-size: 30px;
                font-weight: bold;
                float: left;
                margin-left: 20px;
                line-height: 70px;
                text-decoration: none;
            }
            
            #announce {
                position: absolute;
                margin-left: 30px;
                top: 25px;
                color: rgba(128, 128, 128, 0.56);
                float: left;
                text-decoration: none;
            }

            #header-list {
                position: absolute;
                top: 25px;
                right: 0;
            }

            #header-list>li {
                float: left;
                margin-right: 10px;
            }

            #header-list>li>a {
                text-decoration: none;
                color: rgba(128, 128, 128, 0.56);
            }
        `;
        shadow.appendChild(style);
    }
}

customElements.define("cafe-header", CafeHeader);