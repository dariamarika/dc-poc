import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class ImageBar extends PolymerElement {
    static get template() {
      return html`
        <style>
          :host {
            background-color: rgb(13, 26, 38);
            background-image: linear-gradient(rgb(13, 26, 38), rgb(27, 52, 75));
            border-bottom-left-radius: 7px;
            border-bottom-right-radius: 7px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            color: rgb(255, 255, 255);
            height: 50px;
            font-family: sans-serif;
            font-size: 1.2em;
            left: 0;
            opacity: 0.9;    
            position: fixed;
            top: 0;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;           
          }
          .button {
            border: 2px solid rgb(41, 77, 112);
            background-color: rgb(13, 26, 38);            
            color: rgb(236, 242, 248);
            padding: 10px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            transition-duration: 0.4s;
            border-radius: 4px;
          }
          .button:hover {
            background-color: rgb(28, 52, 74);            
          }
          .input {
            display: inline-block;
            border: 2px solid rgb(41, 77, 112);
            background-color: rgb(218, 230, 241);
            padding: 10px 32px;
            font-size: 16px;            
            width: 50%;
            border-radius: 4px;
            margin: 0 5px;            
          }          
          .form {
            width: 50%;
          }     
        </style>  
        <form class="form"
            <label class="label">New image path</label><input class="input" type="text" id="imgBarSrcInput" /><button class="button" type="button" id="imgBarSrcBtn">Save</button>        
        </form>
      `;
    }

    static get properties() {
      return {
        targetImage: Object,        
      }
    }

    constructor() {
      super();    
    }

    ready() {
      super.ready();
      this.$.imgBarSrcBtn.addEventListener('click', () => {this.handleClick()});
    }
  
    handleClick() {      
      if (this.$.imgBarSrcInput.value) {
        this.targetImage.src = this.$.imgBarSrcInput.value;
        document.body.removeChild(this);
      }      
    }
  }
  
  customElements.define('dc-image-bar', ImageBar);