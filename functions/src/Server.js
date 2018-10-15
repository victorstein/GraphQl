/**
 * @module Server
 * @description Entry point for th GraphQL API. <br /> The file requires the following libraries:
 * <br/><br/>
 * express {@link https://expressjs.com/es/starter/installing.html}<br/>
 * expressGraphQL {@link https://github.com/graphql/express-graphql#simple-setup}<br/>
 * firebase-functions {@link https://firebase.google.com/docs/functions/}<br/>
 * @requires RootQueryType
 * @requires firebase-admin
 * <br/><br/>
 * @author Alfonso Gomez
*/

import "@babel/polyfill";
import express from 'express'
import * as functions from 'firebase-functions'
import expressGraphQL from 'express-graphql'
import RootQuery from './schema/RootQueryType'
import crawlData from './helpers/crawler'

/**
 * @constant app
 * @description constant that holds an express instance
*/
const app = express();

/**
 * @method use
 * @param {String} endpoint predefined endpoint to resolve
 * @param {function} callback This function runs when the endpoint is requested
 * @see {@link http://expressjs.com/es/api.html#app.use}
*/
app.use("/graphql", expressGraphQL({
  schema: RootQuery,
  graphiql: true
}));

app.use("/feeddatabase", ()=>{
  crawlData.start()
});

/**
 * @constant port
 * @description constant holding the value of the PORT environment variable or port 3000
*/
const port = process.env.PORT || 3000;

exports.app = functions.https.onRequest(app)
