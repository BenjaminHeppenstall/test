cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com.admob.plugin.admob",
    "file": "plugins/com.admob.plugin/www/admob.js",
    "pluginId": "com.admob.plugin",
    "clobbers": [
      "window.admob"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "com.admob.plugin": "5.5.0"
};
// BOTTOM OF METADATA
});