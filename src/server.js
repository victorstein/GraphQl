/**
 * @module Server
 * @description Entry point for th GraphQL API. <br /> The file requires the following libraries:
 * <br/><br/>
 * express {@link https://expressjs.com/es/starter/installing.html}<br/>
 * expressGraphQL {@link https://github.com/graphql/express-graphql#simple-setup}<br/>
 * @requires RootQueryType
 * <br/><br/>
 * @author Alfonso Gomez
*/
import express from 'express'
import expressGraphQL from 'express-graphql'
import RootQuery from './schema/RootQueryType'

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
app.use("/", expressGraphQL({
  schema: RootQuery,
  graphiql: true
}));

/**
 * @constant port
 * @description constant holding the value of the PORT environment variable or port 3000
*/
const port = process.env.PORT || 3000;

/**
 * @method listen
 * @param {String} port predefined port to run the server
 * @param {function} callback This function runs when the app starts listening to the specified port
 * @see {@link https://expressjs.com/es/4x/api.html#app.listen}
*/
app.listen(port, ()=> console.log(`listening in port ${3000}`))
