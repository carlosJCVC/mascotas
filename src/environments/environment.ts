// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  petsAPI: 'https://localhost:44307',
  petsAPIazure: 'https://petsapi20181214033302.azurewebsites.net',
  petsAPIlaravel: 'http://bet.mascotasapi.com',
  firebaseConfig: {
    apiKey: 'AIzaSyARsKD_vJmMNCPAii3niaXgvovob2XCFt0',
    authDomain: 'pets-image-server.firebaseapp.com',
    databaseURL: 'https://pets-image-server.firebaseio.com',
    projectId: 'pets-image-server',
    storageBucket: 'pets-image-server.appspot.com',
    messagingSenderId: '1078139845830'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
