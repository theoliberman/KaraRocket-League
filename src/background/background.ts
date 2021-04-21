import { windowNames } from "../consts";
import { OWWindow } from '@overwolf/overwolf-api-ts';
import RunningGameInfo = overwolf.games.RunningGameInfo;

// The background controller holds all of the app's background logic - hence its name. it has
// many possible use cases, for example sharing data between windows, or, in our case,
// managing which window is currently presented to the user. To that end, it holds a dictionary
// of the windows available in the app.
// Our background controller implements the Singleton design pattern, since only one
// instance of it should exist.
class BackgroundController {
  private static _instance: BackgroundController;
  private _windows = {};

  private constructor() {
    // Populating the background controller's window dictionary
    this._windows[windowNames.desktop] = new OWWindow(windowNames.desktop);
    this._windows[windowNames.inGame] = new OWWindow(windowNames.inGame);
  };

  // Implementing the Singleton design pattern
  public static instance(): BackgroundController {
    if (!BackgroundController._instance) {
      BackgroundController._instance = new BackgroundController();
    }

    return BackgroundController._instance;
  }

  public async run() {
    this._windows[windowNames.desktop].restore();
  }

}

BackgroundController.instance().run();
