/**
 * @module MovieType
 * @description this module contains the Movie Schema definition
 * @see {@link https://graphql.org/graphql-js/type/}
 * <br/><br/>
 * @author Alfonso Gomez
*/
import graphql from 'graphql'

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
 * @property {key} name Contains the name of the type definition "Movie"
 * @property {key} fields Object that containes the schema definition
 * @description Constructor class for the MovieType schema
*/
const MovieType = new graphQLObjectType({
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
  */
  fields: {
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
    small_photo: { type: GraphQLString }
  }
})

export default MovieType
