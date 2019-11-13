export default class HTMLShadowRootElement extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open', delegatesFocus: true});
  }

  connectedCallback() {
    Array.from(this.childNodes).forEach(child => this.shadow.appendChild(this.removeChild(child)));
  }
}
customElements.define('shadow-root', HTMLShadowRootElement);
