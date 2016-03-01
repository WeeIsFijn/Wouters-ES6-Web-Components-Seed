import {UIComponent} from 'Components/UIComponent.js';
import {WebGL} from 'GL/WebGL.js';

export class GLComponent extends UIComponent {

  createdCallback() {
    this.innerHTML = '<canvas id="maincanvas01" style="border: none;" width="500" height="500"></canvas>';
    let canvas = document.getElementById('maincanvas01');
    let gl = new WebGL({canvas: canvas});
  }

  static register() {
    document.registerElement('gl-component', GLComponent);
  }
}