import { HelloWorld } from 'Components/Components.js';

export class Application {

  constructor () {
    HelloWorld.register();

    this.message = 'Hello, world';
  }

}