import { makeExecutableSchema } from "graphql-tools";
import { Query } from "./query";
import { Mutation } from "./mutation";
import { userTypes } from "./resources/user/user.schema";
import { PostTypes } from "./resources/post/post.schema";
import { commentTypes } from "./resources/comments/comment.schema";

const SchemaDefinition = `

  type Schema {
    query: Query,
    mutation: Mutation
  }

`;

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, Query, Mutation, userTypes, PostTypes, commentTypes]
});
