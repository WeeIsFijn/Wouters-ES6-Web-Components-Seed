import { GLComponent } from 'Components/Components.js';

export class Application {

  constructor () {
    GLComponent.register();

    console.log('initialized Application class');
  }

}