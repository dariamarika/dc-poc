import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners.js';
import * as Gestures from '@polymer/polymer/lib/utils/gestures.js';
import { imageSharedStyles } from './dc-image-shared.styles.js';
import { ImageResize } from './dc-image-resize.component.js'
import { ImageChange } from './dc-image-change-src.component.js'
import { restoreValues } from './dc-shared.js';

class ImageBar extends GestureEventListeners(PolymerElement) {
  static get template() {
    return html`
      ${imageSharedStyles}
      <ul class="content">
        <li class="button" id="optionResize" on-tap="tapHandler">Resize</li>
        <li class="button" id="optionChangeImg" on-tap="tapHandler">Change image</li>
        <li class="button" id="optionRestore" on-tap="tapHandler">Restore</li>
      </ul>                 
    `;
  }

  static get properties() { return { targetImage: Object } }

  constructor() {
    super();
    Gestures.removeListener(this, 'tap', this.tapHandler.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    Gestures.removeListener(this, 'tap', this.tapHandler.bind(this));
  }

  tapHandler(e) {
    document.body.removeChild(this);
    switch (e.target.id) {
      case 'optionResize':
        document.body.appendChild(new ImageResize(this.targetImage));
        break;
      case 'optionChangeImg':
        document.body.appendChild(new ImageChange(this.targetImage));
        break;
      case 'optionRestore':
        this.handleRestore();
        break;
      default:
        return;
    }
  }

  handleRestore() {
    var restoredImg = restoreValues(this.targetImage);

    this.targetImage.setAttribute('src', restoredImg.src);
    this.targetImage.setAttribute('width', restoredImg.width);
    this.targetImage.setAttribute('height', restoredImg.height);
  }
}

customElements.define('dc-image-bar', ImageBar);