export default class HTMLShadowRootElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open', delegatesFocus: true});
    }

    connectedCallback() {
        Array.from(this.childNodes).forEach(child => this.shadowRoot.appendChild(this.removeChild(child)));
    }
}
customElements.define('shadow-root', HTMLShadowRootElement);
