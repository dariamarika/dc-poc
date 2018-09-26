import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners.js';
import * as Gestures from '@polymer/polymer/lib/utils/gestures.js';
import { imageSharedStyles } from './dc-image-shared.styles';
import { restoreValues } from './dc-shared.js';

export { ImageResize };

class ImageResize extends GestureEventListeners(PolymerElement) {
  static get template() {
    return html`
        ${imageSharedStyles}
        <form class="content"
          <label for="dcImageResizeWidthId">Width</label>
          <input class="input" type="text" id="dcImageResizeWidthId" />
          <label for="dcImageResizeHeightId">Height</label>            
          <input class="input" type="text" id="dcImageResizeHeightId" />
          <button class="button" type="button" id="dcImageResizeSaveButtonId" on-tap="tapHandler">Save</button>        
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
    if (this.$.dcImageResizeWidthId.value || this.$.dcImageResizeHeightId.value) {
      var restoredImg = restoreValues(this.target);
      var originalRatio = restoredImg.height ? restoredImg.width / restoredImg.height : 1;
      var width = 0;
      var height = 0;

      if (this.$.dcImageResizeWidthId.value && !this.$.dcImageResizeHeightId.value) {
        width = this.$.dcImageResizeWidthId.value;
        height = restoredImg.width * originalRatio;
      }

      if (!this.$.dcImageResizeWidthId.value && this.$.dcImageResizeHeightId.value) {
        width = this.$.dcImageResizeHeightId.value * originalRatio;
        height = this.$.dcImageResizeHeightId.value
      }

      this.target.setAttribute('width', this.$.dcImageResizeWidthId.value || width);
      this.target.setAttribute('height', this.$.dcImageResizeHeightId.value || height);
      document.body.removeChild(this);
    }
  }
}

customElements.define('dc-image-resize', ImageResize);