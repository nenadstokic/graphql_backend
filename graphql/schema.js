const { buildSchema } = require('graphql');

// RootQuery is our name
// ! means required
module.exports = buildSchema(`
  type TestData {
    text: String!
    views: Int!
  }
  type RootQuery { 
    hello: TestData!
  }
  schema {
    query: RootQuery
  }
`);
