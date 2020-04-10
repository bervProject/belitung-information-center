
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "ionic-plugin-keyboard.keyboard",
          "file": "plugins/ionic-plugin-keyboard/www/ios/keyboard.js",
          "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
          "cordova.plugins.Keyboard"
        ],
        "runs": true
        },
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-device": "2.0.3",
      "ionic-plugin-keyboard": "2.2.1"
    };
    // BOTTOM OF METADATA
    });
    