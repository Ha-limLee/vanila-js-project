export class Component extends HTMLElement {
    constructor() {
        super();
    }
    
    init(child) {
        child.attachShadow({ mode: "open" });
        this.connectedCallback.bind(child);
    }

    connectedCallback() {
        const { html, events } = this.render();
        
        this.shadowRoot.innerHTML = html;
        events?.forEach(fn => fn(this.shadowRoot));
    }

    setState = (newState) => {
        if (!Component.isSame(this.state, newState)) {
            this.state = newState;
            this.render();
        }
    }

    static isSame = (state, newState) => {
        const keys = Object.keys(state);
        const newKeys = Object.keys(newState);

        if (keys.length !== newKeys.length) {
            return false;
        }

        for (let key of keys) {
            if (state[key] !== newState[key])
                return false;
        }
        return true;
    }

    render = () => {
        throw new Error("You have to implement the method render()");
    }
}