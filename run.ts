import { AndroidController } from 'mobile-devices-controller';

var android_home = AndroidController.getAndroidHome();
console.log("android_home = " + android_home);


var p = AndroidController.parsePlatforms();
console.log('platforms: ');
console.dir(p);
//android-27
//android-28

var  avds = AndroidController.parseEmulatorsAvds();
//when avds include "Android_Accelerated_Oreo.ini" then crash. 

console.log('platforms: ' + JSON.stringify(avds));  
console.log('output');