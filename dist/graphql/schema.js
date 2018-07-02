"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const users = [
    {
        id: 1,
        name: 'Gabriel Marcos',
        email: 'gabriel.marcos@gmail.com'
    },
    {
        id: 2,
        name: 'Marcelo Montanher',
        email: 'marcelo.montanher@gmail.com'
    },
    {
        id: 3,
        name: 'Camila Caligari',
        email: 'camila.caligari@gmail.com'
    }
];
const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    allUser: [User!]!
  }
`;
const resolvers = {
    Query: {
        allUser: () => users
    }
};
exports.default = graphql_tools_1.makeExecutableSchema({ typeDefs, resolvers });
