cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-iosrtc.Plugin",
    "file": "plugins/cordova-plugin-iosrtc/dist/cordova-plugin-iosrtc.js",
    "pluginId": "cordova-plugin-iosrtc",
    "clobbers": [
      "cordova.plugins.iosrtc"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-iosrtc": "4.0.2"
};
// BOTTOM OF METADATA
});