class InputTitle extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
    this._class = "input-title";

    this._type = this.getAttribute("type");
    this._name = this.getAttribute("name");
    this._id = this.getAttribute("_id");
    this._placeholder = this.getAttribute("_placeholder");
  }

  updateStyle() {
    this._style.textContent = `
      :host {
        
        background-color: red;
        width: 100%;

      }

      .container .note-add .note-add-input .note-title {
        margin: 10px 0;
      }

      container .note-add .note-add-input .note-title  > input {
        height: 40px;
        padding: 0 10px;
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
    <div class="note-title">
      <input
      type="${this._type}"
      name="title"
      id="${this.id}"
      placeholder="Judul Note"
        required />
    </div>`;
  }
}

customElements.define("input-title", InputTitle);
