export class CafeHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <style>
            @import "./style.css";
            </style>

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
    }
}
