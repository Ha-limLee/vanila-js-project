class CafeAside extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        const shadow = this.shadowRoot;
        shadow.innerHTML = `
            <aside>
                <img id="noimg" src="./img/noimg.png">
                <img id="profile" src="./img/profile.png" style="display: none">
                <div id="aside-title">
                    <div id="aside-title-text">
                        전국매장펼치기
                    </div>
                </div>
                <ul>
                    <div id="collapse-seoul" onclick="collapse(this)">
                        서울
                    </div>
                    <li style="display:none"><a href="#">역삼점</a></li>
                    <li style="display:none"><a href="#">선릉점</a></li>
                </ul>
                <ul>
                    <div id="collapse-daejeon" onclick="collapse(this)">
                        대전
                    </div>
                    <li style="display:none"><a href="#">학하점</a></li>
                    <li style="display:none"><a href="#">봉명점</a></li>
                </ul>
                <ul>
                    <div id="collapse-gumi" onclick="collapse(this)">
                        구미
                    </div>
                    <li style="display:none"><a href="#">인동점</a></li>
                    <li style="display:none"><a href="#">공단점</a></li>
                </ul>
                <ul>
                    <div id="collapse-gwangju" onclick="collapse(this)">
                        광주
                    </div>
                    <li style="display:none"><a href="#">하남산단점</a></li>
                    <li style="display:none"><a href="#">광주역점</a></li>
                </ul>
                <div id="aside-poll">
                    <div id="aside-poll-header">
                        [ 당신의 선택 ]
                    </div>
                    <div>
                        공부하고 싶은 분야를 골라 주세요!!!
                    </div>
                    <form>
                        <div>
                            <input type="radio" name="subject" id="subject-1">
                            <label for="subject-1"><img src="./img/poll/python.png" alt="python">Python</label>
                        </div>
                        <div>
                            <input type="radio" name="subject" id="subject-2">
                            <label for="subject-2"><img src="./img/poll/html5.png" alt="html5">HTML5</label>
                        </div>
                        <div>
                            <input type="radio" name="subject" id="subject-3">
                            <label for="subject-3"><img src="./img/poll/vuejs.png" alt="vuejs">Vue.js</label>
                        </div>
                        <div>
                            <input type="radio" name="subject" id="subject-4">
                            <label for="subject-4"><img src="./img/poll/java.png" alt="java">Java</label>
                        </div>
                        <input id="result" type="button" value="결과보기" />
                        <input id="vote" type="submit" value="투표하기" />
                    </form>
                    <div id="aside-poll-footer">
                        투표기간 : 21.03.01 ~ 21.03.31
                    </div>
                </div>
            </aside>
        `;
        const style = document.createElement("style");
        style.innerHTML = `
            aside {
                margin-left: 30px;
                width: 255px;
                float: left;
            }

            #aside-title {
                text-align: center;
                height: 40px;
                background-color: rgba(128, 128, 128, 0.403);
                border-radius: 8px;
            }

            #aside-title-text {
                position: relative;
                top: 10px;
            }

            aside>ul {
                position: relative;
                background-color: rgba(128, 128, 128, 0.18);
                
                padding-top: 5px;
                margin-top: 5px;
                border-radius: 8px;
            }

            aside>ul div {
                position: relative;
                left: -25px;
                font-weight: bold;
            }

            aside>ul li {
                padding-top: 5px;
                padding-bottom: 5px;
            }

            aside>ul a {
                color: black;
                text-decoration: none;
            }

            #aside-poll {
                margin-top: 10px;
                border: 1px solid rgba(128, 128, 128, 0.56);
                border-radius: 8px;
            }

            #aside-poll-header {
                text-align: center;
                margin: 5px 0;
            }

            #aside-poll-header + div {
                font-weight: bold;
                padding: 0 12px;
            }
        `;
        shadow.appendChild(style);
    }
}

customElements.define("cafe-aside", CafeAside);