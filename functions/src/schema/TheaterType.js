/**
 * @module TheaterType
 * @description this module contains the Theater Schema definition
 * <br/><br/>
 * @requires graphql
 * @requires GraphQLObjectType
 * @requires GraphQLString
 * @requires MovieType
 * @requires HelperFunctions
 * @author Alfonso Gomez
 * @see {@link https://graphql.org/graphql-js/type/}
*/

import graphql, { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql'
import MovieType from './MovieType'
import * as helper from '../helpers/functions'

/**
 * @constant graphQLObjectType
 * @description Destructuring graphQL object to retreive graphQLObjectType and GraphQLString
*/
/**
 * @constant GraphQLString
 * @description Destructuring graphQL object to retreive GraphQLString
*/
/**
 * @constant GraphQLList
 * @description Destructuring graphQL object to retreive GraphQLList
*/

/**
 * @constant date
 * @description constant that contains the current date in format dmyyyy from the helper function getCurrentDateString
 * @see module:HelperFunctions
*/
const date = helper.getCurrentDateString();

/**
 * @function graphQLObjectType
 * @param {object} config object containing the properties {@link name} and {@link fields}
 * @property {key} name Contains the name of the type definition "Theater"
 * @property {key} fields Object that containes the schema definition
 * @description Constructor class for the TheaterType schema
*/
const TheaterType = new GraphQLObjectType({
  /**
    * @typedef {string} name Contains the name of the type definition "Theater"
  */
  name: "Theater",
  /**
    * @typedef {Object} fields
    * @property {String} id string defining the id of the Theater
    * @property {String} name string defining the name of the Theater
    * @property {String} address string defining the address of the Theater
  */
  fields: ()=> ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    movies: {
      type: GraphQLList(MovieType),
      resolve: async (parentValue, args) =>{
        let data = (await helper.database.ref(`/${date}/movies/`).once("value")).val()
        return (data) ? data.filter(u => parentValue.movies.includes(u.id)) : null
      }
    }
  })
})

export default TheaterType
