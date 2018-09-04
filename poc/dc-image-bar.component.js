import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { imageSharedStyles } from './dc-image-shared.styles.js';
import { ImageResize } from './dc-image-resize.component.js'
import { ImageChange } from './dc-image-change-src.component.js'
import { restoreValues } from './dc-shared.js';

const imageResizeTag = 'dc-image-resize';
const imageChangeTag = 'dc-image-change';

class ImageBar extends PolymerElement {
  static get template() {
    return html`
      ${imageSharedStyles}      
      <ul class="content">
        <li class="button" id="optionResize">Resize</li>
        <li class="button" id="optionChangeImg">Change image</li>
        <li class="button" id="optionRestore">Restore</li>
      </ul>
    `;
  }

  static get properties() { return { targetImage: Object } }

  handleRestore() {    
    var restoredImg = restoreValues(this.targetImage);
    
    this.targetImage.setAttribute('src', restoredImg.src);
    this.targetImage.setAttribute('width', restoredImg.width);
    this.targetImage.setAttribute('height', restoredImg.height);    
  }

  ready() {
    super.ready();
    this.$.optionResize.addEventListener('click', () => { this.handleClick(imageResizeTag) });
    this.$.optionChangeImg.addEventListener('click', () => { this.handleClick(imageChangeTag) });
    this.$.optionRestore.addEventListener('click', () => { this.handleRestore() });
  }

  handleClick(option) {
    document.body.removeChild(this);
    switch (option) {
      case imageResizeTag:
        document.body.appendChild(new ImageResize(this.targetImage));
        break;
      case imageChangeTag:
        document.body.appendChild(new ImageChange(this.targetImage));
        break;
      default:
        return;
    }
  }
}

customElements.define('dc-image-bar', ImageBar);