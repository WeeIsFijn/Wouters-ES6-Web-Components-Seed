import {UIComponent} from 'Components/UIComponent.js';

export class HelloWorld extends UIComponent {

  createdCallback() {
    this.innerHTML = '<b>Hello, world of web components!</b>';
  };

  static register() {
    document.registerElement('hello-world', HelloWorld);
  };
}