export class Component extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    get template() {
        throw new Error("You have to implement the template getter.");
    }

    initEvents() {
        const es = this.events;
        es.forEach(e => e(this.shadowRoot));
    }

    setState(newState) {
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

    render () {
        this.shadowRoot.innerHTML = this.template;
        this.initEvents();
    }
}