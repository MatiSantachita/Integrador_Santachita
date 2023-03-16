// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'portfolio-matias',
    appId: '1:348323025101:web:a34ec1d7895e6f675d5984',
    storageBucket: 'portfolio-matias.appspot.com',
    locationId: 'southamerica-east1',
    apiKey: 'AIzaSyB8d00xRpo4xpa1MBMW5cnPeRqKsvv-ZX0',
    authDomain: 'portfolio-matias.firebaseapp.com',
    messagingSenderId: '348323025101',
    measurementId: 'G-CJ6E9GT0RZ',
  },
  production: false,

  URL: 'http://localhost:8080' 
  //URL: 'escribir url de mi portfolio cuando lo tenga'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
