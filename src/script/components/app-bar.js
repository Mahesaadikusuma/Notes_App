class AppBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  updateStyle() {
    this._style.textContent = `
          :host {
            max-width: 1200px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: 20px;
            margin: 0 auto;
          }
  
          .brand-name > h1 {
            color: black;
            font-size: 32px;
          }
      `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.updateStyle();
    this._emptyContent();

    this._shadowRoot.append(this._style);

    this._shadowRoot.innerHTML += `      
    <div class="brand-name">
        <h1>Notes App Component</h1>
    </div> 
    `;
  }
}

customElements.define("app-bar", AppBar);
