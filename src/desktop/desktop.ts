import { AppWindow } from "../AppWindow";
import { windowNames } from "../consts";

class Desktop extends AppWindow {
    private static _instance: Desktop;
    private _version: HTMLElement;


    private constructor() {
      super(windowNames.desktop);

      this._version = document.getElementById('version');
    }
  
    public static instance() {
      if (!this._instance) {
        this._instance = new Desktop();
      }
      return this._instance;
    }
  
    public run() {
        this.setVersion();
    }

    private setVersion() {
        var version = JSON.stringify(require('../../package.json').version);
        version = version.replace(/['"]+/g, '');
        version = `VERSION : ${version}`;
        console.log(version);
        this._version.textContent = version;
    }
}
  
Desktop.instance().run();
  
