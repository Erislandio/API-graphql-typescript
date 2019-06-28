import { makeExecutableSchema } from "graphql-tools";
import { Query } from "../../dist/graphql/query";
import { Mutation } from "./mutation";

const schemaDefinition = `

  type schema {
    query: Query
    mutation: Mutation
  }

`;

export default makeExecutableSchema({
  typeDefs: [schemaDefinition, Query, Mutation]
});
