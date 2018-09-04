import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners.js';
import * as Gestures from '@polymer/polymer/lib/utils/gestures.js';
import { imageSharedStyles } from './dc-image-shared.styles';
import { restoreValues } from './dc-shared.js';

export { ImageChange };

class ImageChange extends GestureEventListeners(PolymerElement) {
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
                .dragg {
                    
                }
            </style>            
            <form class="form"
                <label for="imgBarSrcInput">New image path</label>
                <input class="input" type="text" id="imgBarSrcInput" />
                <button class="button" type="button" id="imgBarSrcBtn" on-tap="tapHandler">Save</button>        
            </form>                            
        `;
    }

    constructor(target) {
        super();
        this.target = target;
        Gestures.removeListener(this, 'tap', this.tapHandler.bind(this));
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        Gestures.removeListener(this, 'tap', this.tapHandler.bind(this));
    }

    tapHandler() {
        this.target.setAttribute('src', this.$.imgBarSrcInput.value || restoreValues(this.target).src);
        document.body.removeChild(this);
    }
}

customElements.define('dc-image-change', ImageChange);