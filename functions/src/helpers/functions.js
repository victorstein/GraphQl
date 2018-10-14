/**
 * @module HelperFunctions
 * @description Helper Functions
 * @requires firebase-admin
 * @author Alfonso Gomez
*/

import * as admin from 'firebase-admin'

/**
 * @constant app
 * @description constant that contains an instance of the real time database admin privileges
*/
export const app = admin.initializeApp();

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
