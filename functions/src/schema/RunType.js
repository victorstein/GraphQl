/**
 * @module RunType
 * @description this module contains the Run Schema definition
 * <br/><br/>
 * @requires graphql
 * @requires GraphQLObjectType
 * @requires GraphQLString
 * @requires TheaterType
 * @requires MovieType
 * @requires HelperFunctions
 * @author Alfonso Gomez
 * @see {@link https://graphql.org/graphql-js/type/}
*/

import graphql, { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql'
import * as helper from '../helpers/functions'
import TheaterType from './TheaterType'
import MovieType from './MovieType'

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
 * @property {key} name Contains the name of the type definition "Run"
 * @property {key} fields Object that containes the schema definition
 * @description Constructor class for the RunType schema
*/
const RunType = new GraphQLObjectType({
  /**
    * @typedef {string} name Contains the name of the type definition "Run"
  */
  name: "Run",
  /**
    * @typedef {Object} fields
    * @property {String} id string defining the id of the movie
    * @property {String} room string defining the name of the movie
    * @property {String} language string defining the rating of the movie
    * @property {String} schedule string defining the duration of the movie
    * @property {String} theater string defining the classification of the movie
    * @property {String} movie string defining the genere of the movie

  */
  fields: ()=> ({
    id: { type: GraphQLString },
    room: { type: GraphQLString },
    language: { type: GraphQLString },
    schedule: { type: GraphQLString },
    theater: { type: GraphQLString },
    movie: { type: GraphQLString },
  })
})

export default RunType
