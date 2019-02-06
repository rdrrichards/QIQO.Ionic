// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const baseHost = 'http://localhost:34479/api/';

export const environment = {
  production: false,
  baseHost: `${baseHost}`,
  baseUrls: {
    accounts: `${baseHost}accounts`,
    orders: `${baseHost}orders`,
    openorders: `${baseHost}openorders`,
    products: `${baseHost}products`,
    carts: `${baseHost}carts`,
    auth: `${baseHost}auth`
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
