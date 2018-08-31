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
      <style>
        .ul {
          margin: 0;
          padding: 0;
        }        
        .liButton {
          border: 2px solid rgb(41, 77, 112);
          background-color: rgb(13, 26, 38);            
          color: rgb(236, 242, 248);
          padding: 10px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;          
          cursor: pointer;
          transition-duration: 0.4s;
          border-radius: 4px;
      }
      .liButton:hover {
          background-color: rgb(28, 52, 74);            
      }             
      </style>
      <ul>
        <li class="liButton" id="optionResize">Resize</li>
        <li class="liButton" id="optionChangeImg">Change image</li>
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