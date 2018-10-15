/**
 * @module RootQueryType
 * @description This module contains all the graphQL schema definitions<br/><br/>
 * @requires MovieType
 * @requires TheaterType
 * @requires HelperFunctions
 * @requires graphql
 * @requires GraphQLObjectType
 * @requires GraphQLString
 * @requires GraphQLSchema
 * @author Alfonso Gomez
 * @see {@link https://graphql.org/graphql-js/type/}
*/

import * as helper from '../helpers/functions'
import graphql, { GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql'
import MovieType from './MovieType'
import TheaterType from './TheaterType'

/**
 * @constant date
 * @description constant that contains the current date in format dmyyyy from the helper function getCurrentDateString
 * @see module:HelperFunctions
*/
const date = helper.getCurrentDateString();

/**
 * @function graphQLObjectType
 * @param {object} config object containing the properties {@link name} and {@link fields}
 * @property {key} name Contains the name of the type definition "RootQueryType"
 * @property {key} fields Object that containes the schema definition
 * @description Constructor class for the RootQueryType schema
*/
const RootQuery = new GraphQLObjectType({
  /**
    * @typedef {string} name Contains the name of the type definition "RootQueryType"
  */
  name: 'RootQueryType',
  /**
    * @typedef {Object} fields
    * @property {Object} movie definition for the movie key
    * @property {Object} type reference to the {@link MovieType}
    * @property {Object} args params required to execute the query
    * @property {function} resolve resolver function for the query
    * @see module:MovieType
  */
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLString } },
      resolve: async (parentValue, args)=>{
        let data = (await helper.database.ref(`/${date}/movies/`).once("value")).val()
        return (data) ? data.find(u => u.id === args.id) : null
      }
    },
    theater: {
      type: TheaterType,
      args: { id: { type: GraphQLString } },
      resolve: async (parentValue, args)=>{
        let data = (await helper.database.ref(`/${date}/theaters/`).once("value")).val()
        return (data) ? data.find(u => u.id === args.id) : null
      }
    }
  }
})

export default new GraphQLSchema({
  query: RootQuery
})
