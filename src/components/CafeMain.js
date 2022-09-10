class CafeMain extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        const shadow = this.shadowRoot;
        shadow.innerHTML = `
            <main>
                <div>[ 프로그래밍 언어 ]</div>
                    <section>
                        <img src="./img/book/p_book01.png" alt=""><img src="./img/book/p_book02.png" alt=""><img src="./img/book/p_book03.png" alt=""><img src="./img/book/p_book04.png" alt=""><img src="./img/book/p_book05.png" alt="">
                    </section>
                        <div>[ 에세이 ]</div>
                    <section>
                        <img src="./img/book/e_book01.png" alt=""><img src="./img/book/e_book02.png" alt=""><img src="./img/book/e_book03.png" alt=""><img src="./img/book/e_book04.png" alt=""><img src="./img/book/e_book05.png" alt="">
                    </section>
                    <div id="main-popular">
                        [ 인기글 ]
                        <table>
                            <thead>
                                <tr>
                                    <th>제목</th>
                                    <th>작성자</th>
                                    <th>조회수</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>자바 공부 쉽게 하는 법</td>
                                    <td>이써림</td>
                                    <td>1756</td>
                                </tr>
                                <tr>
                                    <td>알고리즘은 자바? 파이썬?</td>
                                    <td>홍정밍</td>
                                    <td>998</td>
                                </tr>
                                <tr>
                                    <td>스프링 정복하기~</td>
                                    <td>김나켠</td>
                                    <td>856</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="main-latest">
                    [ 최신글 ]
                    <table>
                        <thead>
                        <tr>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>조회수</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>web 관련 질문있어요.</td>
                            <td>이주넘</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>vuejs는 이렇게 공부해보세요.</td>
                            <td>조밍기</td>
                            <td>98</td>
                        </tr>
                        <tr>
                            <td>꽃길만 걸어요.</td>
                            <td>류해면</td>
                            <td>56</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
            </main>
        `;
    }
}

customElements.define("cafe-main", CafeMain);