import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { imageSharedStyles } from './dc-image-shared.styles';

export { ImageChange };

class ImageChange extends PolymerElement {
    static get template() {
        return html`
            ${imageSharedStyles}
            <style>
                .input {
                    background-color: rgb(218, 230, 241);
                    border: 2px solid rgb(41, 77, 112);
                    border-radius: 4px;
                    display: inline-block;  
                    height: 32px;                      
                    font-size: 1em;
                    margin: 0 5px;
                    padding: 0 10px;                     
                    width: 45%;
                }
            </style>
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
        this.$.imgBarSrcBtn.addEventListener('click', () => { this.handleClick() });
    }

    handleClick() {
        if (this.$.imgBarSrcInput.value) {            
            this.target.setAttribute('src', this.$.imgBarSrcInput.value);
            document.body.removeChild(this);
        }
    }
}

customElements.define('dc-image-change', ImageChange);