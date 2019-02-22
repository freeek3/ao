const electron = require('electron');

const { TouchBarLabel, TouchBarButton, TouchBarSpacer } = electron.TouchBar;

class Touchbar {
  constructor() {
    this._touchbar = null;
  }

  create() {
    console.log('Im creating touchbar Elemets');
    const l1 = new TouchBarLabel();
    const l2 = new TouchBarLabel();
    l1.label = "text1";
    l2.label = "text2";

    this._touchbar = new electron.TouchBar({
      items: [
        l1,
        new TouchBarSpacer({ size: 'small' }),
        l2,
        new TouchBarSpacer({ size: 'small' })
      ]
    });

    return this._touchbar;
  }

}

module.exports = new Touchbar();
