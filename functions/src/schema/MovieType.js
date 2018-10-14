/**
 * @module MovieType
 * @description this module contains the Movie Schema definition
 * <br/><br/>
 * @requires graphql
 * @requires GraphQLObjectType
 * @requires GraphQLString
 * @requires TheaterType
 * @requires HelperFunctions
 * @author Alfonso Gomez
 * @see {@link https://graphql.org/graphql-js/type/}
*/

import graphql, { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql'
import * as admin from 'firebase-admin'
import * as helper from '../helpers/functions'
import TheaterType from './TheaterType'

/**
 * @constant graphQLObjectType
 * @description Destructuring graphQL object to retreive graphQLObjectType and GraphQLString
*/
/**
 * @constant GraphQLString
 * @description Destructuring graphQL object to retreive GraphQLString
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
 * @property {key} name Contains the name of the type definition "Movie"
 * @property {key} fields Object that containes the schema definition
 * @description Constructor class for the MovieType schema
*/
const MovieType = new GraphQLObjectType({
  /**
    * @typedef {string} name Contains the name of the type definition "Movie"
  */
  name: "Movie",
  /**
    * @typedef {Object} fields
    * @property {String} id string defining the id of the movie
    * @property {String} name string defining the name of the movie
    * @property {String} rating string defining the rating of the movie
    * @property {String} duration string defining the duration of the movie
    * @property {String} classification string defining the classification of the movie
    * @property {String} genere string defining the genere of the movie
    * @property {String} director string defining the director of the movie
    * @property {String} releaseDate string defining the releaseDate of the movie
    * @property {String} synopsis string defining the synopsis of the movie
    * @property {String} trailer string defining the trailer of the movie
    * @property {String} cover_photo string defining the cover_photo of the movie
    * @property {String} small_photo string defining the small_photo of the movie
    * @property {Array} theaters string defining the small_photo of the movie
  */
  fields: ()=> ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    rating: { type: GraphQLString },
    duration: { type: GraphQLString },
    classification: { type: GraphQLString },
    genere: { type: GraphQLString },
    director: { type: GraphQLString },
    releaseDate: { type: GraphQLString },
    synopsis: { type: GraphQLString },
    trailer: { type: GraphQLString },
    cover_photo: { type: GraphQLString },
    small_photo: { type: GraphQLString },
    theaters: {
      type: GraphQLList(TheaterType),
      resolve: (parentValue, args)=>{
        return helper.app.database().ref(`/${date}/theaters/`).once("value").then((data)=>{
          data = data.val();
          return data.filter(u => parentValue.theaters.includes(u.id))
        })
      }
    }
  })
})

export default MovieType
