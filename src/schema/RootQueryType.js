/**
 * @module RootQueryType
 * @description This module contains all the graphQL schema definitions
 * @see {@link https://graphql.org/graphql-js/type/}
 * <br/><br/>
 * @author Alfonso Gomez
*/
import graphql from 'graphql'
import MovieType from './MovieType'

/**
 * @constant graphQLObjectType
 * @description Destructuring graphQL object to retreive graphQLObjectType and GraphQLString
*/
/**
 * @constant GraphQLString
 * @description Destructuring graphQL object to retreive GraphQLString
*/
const {
  graphQLObjectType,
  GraphQLString
} = graphql


/**
 * @function graphQLObjectType
 * @param {object} config object containing the properties {@link name} and {@link fields}
 * @property {key} name Contains the name of the type definition "RootQueryType"
 * @property {key} fields Object that containes the schema definition
 * @description Constructor class for the RootQueryType schema
*/
const RootQuery = new graphQLObjectType({
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

      }
    }
  }
})
