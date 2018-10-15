/**
 * @module HelperFunctions
 * @description Helper Functions
 * @requires firebase-admin
 * @author Alfonso Gomez
*/

import * as admin from 'firebase-admin'
import * as keys from '../../../keys.json'
import serviceAccountKey from '../../../serviceAccountKey.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
  databaseURL: keys.databaseURL
})

/**
 * @constant app
 * @description constant that contains an instance of the real time database admin privileges
*/
export const database = admin.database();

/**
 * @function getCurrentDateString
 * @description Returns current date formated as 'dmyyyy'
*/
export const getCurrentDateString = () =>{
  let d = new Date();
  let date = d.getDate().toString();
  let month = (d.getMonth() + 1).toString();
  let year = d.getFullYear().toString();

  return date+month+year
}
