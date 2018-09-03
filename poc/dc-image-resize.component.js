import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { imageSharedStyles } from './dc-image-shared.styles';

export { ImageResize };

class ImageResize extends PolymerElement {
  static get template() {
    return html`
        ${imageSharedStyles}
        <form class="content"
          <label for="dcImageResizeWidthId">Width</label>
          <input class="input" type="text" id="dcImageResizeWidthId" />
          <label for="dcImageResizeHeightId">Height</label>            
          <input class="input" type="text" id="dcImageResizeHeightId" />
          <button class="button" type="button" id="dcImageResizeSaveButtonId">Save</button>        
        </form>        
      `;
  }

  constructor(target) {
    super();
    this.target = target;
  }

  ready() {
    super.ready();
    this.$.dcImageResizeSaveButtonId.addEventListener('click', () => { this.handleClick() });
  }

  handleClick() {
    this.target.setAttribute('width', this.$.dcImageResizeWidthId.value);
    this.target.setAttribute('height', this.$.dcImageResizeHeightId.value);
    document.body.removeChild(this);
  }
}

customElements.define('dc-image-resize', ImageResize);