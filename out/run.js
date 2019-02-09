"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobile_devices_controller_1 = require("mobile-devices-controller");
var android_home = mobile_devices_controller_1.AndroidController.getAndroidHome();
console.log("android_home = " + android_home);
var p = mobile_devices_controller_1.AndroidController.parsePlatforms();
console.log('platforms: ');
console.dir(p);
var avds = mobile_devices_controller_1.AndroidController.parseEmulatorsAvds();
console.log('platforms: ' + JSON.stringify(avds));
console.log('output');
//# sourceMappingURL=run.js.map