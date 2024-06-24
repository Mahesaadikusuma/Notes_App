class AppBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");

    this._type = this.getAttribute("type");
    this._name = this.getAttribute("name");
    this._id = this.getAttribute("id");
    this._placeholder = this.getAttribute("placeholder");
  }

  updateStyle() {
    this._style.textContent = `
            :host {
              max-width: 1200px;
              display: flex;
              
            }

            .search > input {
                width: 100%;
                min-width: 300px;
                height: 40px;
                padding: 0 10px;
                border-radius: 5px;
                border: 2px solid #003049;
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
    <div class="search">
        <input type="${this._type}" name="${this._name}" id="${this._id}" placeholder="${this._placeholder}" />
    </div> 
      `;
  }
}

customElements.define("search-bar", AppBar);
