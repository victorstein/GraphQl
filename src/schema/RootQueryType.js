/**
 * @module RootQueryType
 * @description This module contains all the graphQL schema definitions
 * <br/><br/>
 * @requires MovieType
 * @requires graphql
 * @requires GraphQLObjectType
 * @requires GraphQLString
 * @requires GraphQLSchema
 * @author Alfonso Gomez
 * @see {@link https://graphql.org/graphql-js/type/}
*/

import graphql, { GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql'
import MovieType from './MovieType'

const db = [
  {
    id: "10",
    name: "Venom",
    rating: "80%",
    duration: "1h 30 min",
    classification: "PG-13",
    genere: "Action",
    director: "Alfonso Cuaron",
    releaseDate: "Today",
    synopsis: "Some synopsis",
    trailer: "https://someptrailer.com",
    cover_photo: "https://somepicture.com",
    small_photo: "https://somebigpicture.com"
  },
  {
    id: "11",
    name: "Hobbit",
    rating: "20%",
    duration: "2h 30 min",
    classification: "R",
    genere: "Adventure",
    director: "D'vito Gomez",
    releaseDate: "Yesterday",
    synopsis: "Some bad synopsis",
    trailer: "https://someptrailer.com",
    cover_photo: "https://somepicture.com",
    small_photo: "https://somebigpicture.com"
  }
]

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
        return db.find(u => u.id === args.id)
      }
    }
  }
})

export default new GraphQLSchema({
  query: RootQuery
})
