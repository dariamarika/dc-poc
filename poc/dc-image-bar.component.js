import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { imageSharedStyles } from './dc-image-shared.styles.js';
import { ImageResize } from './dc-image-resize.component.js'
import { ImageChange } from './dc-image-change-src.component.js'

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

  restoreValues() {    
    var originalValue = JSON.parse(sessionStorage.getItem(this.targetImage.id)) || {};    
    this.targetImage.setAttribute('src', originalValue ? originalValue.src : this.targetImage.src);
    this.targetImage.setAttribute('width', originalValue ? originalValue.width : this.targetImage.width);
    this.targetImage.setAttribute('height', originalValue ? originalValue.height : this.targetImage.height);    
  }

  ready() {
    super.ready();
    this.$.optionResize.addEventListener('click', () => { this.handleClick(imageResizeTag) });
    this.$.optionChangeImg.addEventListener('click', () => { this.handleClick(imageChangeTag) });
    this.$.optionRestore.addEventListener('click', () => { this.restoreValues() });
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