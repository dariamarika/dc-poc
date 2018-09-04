import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { imageSharedStyles } from './dc-image-shared.styles';
import { restoreValues } from './dc-shared.js';

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
    var restoredImg = restoreValues(this.target);
    this.target.setAttribute('width', this.$.dcImageResizeWidthId.value || restoredImg.width);
    this.target.setAttribute('height', this.$.dcImageResizeHeightId.value || restoredImg.height);
    document.body.removeChild(this);
  }
}

customElements.define('dc-image-resize', ImageResize);