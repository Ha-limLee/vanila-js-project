import "./ShopList.js";

const style = `
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

    form img {
        width: 50px;
    }

    form > div {
        margin-left: 10px;
        margin-top: 5px;
        margin-bottom: 10px;
    }
                
    form > #vote {
        float: right;
        color: white;
        background-color: purple;
        box-shadow: 0px 0px 10px 0px rgba(100, 90, 50, 0.5);    
        border: 0;
    }

    form > #result {
        margin-left: 8px;
        float: right;
        background-color: white;
        box-shadow: 0px 0px 10px 0px rgba(100, 90, 50, 0.5);
        border: 0;
    }

    #aside-poll-footer {
        clear: right;
        margin-top: 40px;
        margin-left: 10px;
        margin-bottom: 10px;
        font-weight: bold;
    }
`;

class CafeAside extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        const shadow = this.shadowRoot;
        shadow.innerHTML = `
            <style>
                ${style}
            </style>
            <aside>
                <img id="noimg" src="./img/noimg.png">
                <img id="profile" src="./img/profile.png" style="display: none">
                <div id="aside-title">
                    <div id="aside-title-text">
                        전국매장펼치기
                    </div>
                </div>
                <shop-list city="서울" regions="[&quot;선릉점&quot;, &quot;역삼점&quot;]"></shop-list>
                <shop-list city="대전" regions="[&quot;학하점&quot;, &quot;봉명점&quot;]"></shop-list>
                <shop-list city="구미" regions="[&quot;인동점&quot;, &quot;공단점&quot;]"></shop-list>
                <shop-list city="광주" regions="[&quot;하남산단점&quot;, &quot;광주역점&quot;]"></shop-list>
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
    }
}

customElements.define("cafe-aside", CafeAside);