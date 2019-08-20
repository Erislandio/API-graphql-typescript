import { makeExecutableSchema } from "graphql-tools";

const users: any = [
  {
    id: 1,
    name: "Erislandio",
    email: "erislandiosoares@gmail.com"
  },
  {
    id: 2,
    name: "Dudu",
    email: "dudu@gmail.com"
  }
];

const typeDefs = `

    type User {
        id: ID!
        name: String!
        email: String!
    }
    
    type Query {
        allUsers: [User!]!
    }

`;

const resolvers = {
  Query: {
    allUsers: () => {
      [{}];
    }
  }
};

export default makeExecutableSchema({
  typeDefs,
  resolvers
});
