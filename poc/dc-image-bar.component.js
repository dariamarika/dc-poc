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
      </ul>
    `;}

  static get properties() { return { targetImage: Object } }

  constructor() {
    super();    
  }
  
  ready() {
    super.ready();
    this.$.optionResize.addEventListener('click', () => {this.handleClick(imageResizeTag)});
    this.$.optionChangeImg.addEventListener('click', () => {this.handleClick(imageChangeTag)});      
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