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

import graphql, { GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql'
import MovieType from './MovieType'
import TheaterType from './TheaterType'
import * as helper from '../helpers/functions'

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
      resolve: (parentValue, args)=>{
        return helper.app.database().ref(`/${date}/movies/`).once("value").then((data)=>{
          data = data.val();
          return data.find(u => u.id === args.id)
        })
      }
    },
    theater: {
      type: TheaterType,
      args: { id: { type: GraphQLString } },
      resolve: (parentValue, args)=>{
        return helper.app.database().ref(`/${date}/theaters/`).once("value").then((data)=>{
          data = data.val();
          return data.find(u => u.id === args.id)
        })
      }
    }
  }
})

export default new GraphQLSchema({
  query: RootQuery
})
