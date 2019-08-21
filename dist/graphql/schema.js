"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const query_1 = require("./query");
const mutation_1 = require("./mutation");
const SchemaDefinition = `

  type Schema {
    query: Query,
    mutation: Mutation
  }

`;
exports.default = graphql_tools_1.makeExecutableSchema({
    typeDefs: [SchemaDefinition, query_1.Query, mutation_1.Mutation]
});
