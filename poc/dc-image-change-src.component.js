import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { imageSharedStyles } from './dc-image-shared.styles';

export { ImageChange };

class ImageChange extends PolymerElement {
    static get template() {
      return html`
      ${imageSharedStyles}
        <form class="form"
            <label for="imgBarSrcInput">New image path</label>
            <input class="input" type="text" id="imgBarSrcInput" />
            <button class="button" type="button" id="imgBarSrcBtn">Save</button>        
        </form>        
      `;
    }    

    constructor(target) {        
        super();
        this.target = target;    
    }

    ready() {
        super.ready();
        this.$.imgBarSrcBtn.addEventListener('click', () => {this.handleClick()});
    }
    
    handleClick() {
        if (this.$.imgBarSrcInput.value) {
          this.target.src = this.$.imgBarSrcInput.value;
          document.body.removeChild(this);          
        }      
    }
  }
  
  customElements.define('dc-image-change', ImageChange);