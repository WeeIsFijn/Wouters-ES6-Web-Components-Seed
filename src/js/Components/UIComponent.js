export class UIComponent extends HTMLElement {
  
  // Fired when an instance of the component is created
  createdCallback() {};
  // Fired when an instance was attached to the DOM
  attachedCallback() {};
  // Fired when an instance was detached from the DOM
  detachedCallback() {};
  // Fired when an attribute has been changed, added or deleted
  attributeChangedCallback(attrName, oldVal, newVal) {};

  extendStyle( style ) {
    for (let property in style) {
      this.style[property] = style[property];
    }
  }

  intToPx( pixelsInteger ) {
    return pixelsInteger.toString().concat('px');
  }

  setPosition( {x = this.style.left, y = this.style.top} ) {
    this.extendStyle({
      left: this.intToPx(x),
      top:  this.intToPx(y)
    });
  }

  static register() {
  };
}