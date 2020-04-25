// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseAPIUrl: 'http://localhost:4200/assets/api/mobileList.json',
  firebase:{
    apiKey: "AIzaSyBnkEcBRC_tYsqt6PsX7WqxBS0xpmkL2nA",
    authDomain: "technicalrudra-10111.firebaseapp.com",
    databaseURL: "https://technicalrudra-10111.firebaseio.com",
    projectId: "technicalrudra-10111",
    storageBucket: "technicalrudra-10111.appspot.com",
    messagingSenderId: "106467501413",
    appId: "1:106467501413:web:6910fbf873814510af2d8c",
    measurementId: "G-5MH14Q91CG"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
