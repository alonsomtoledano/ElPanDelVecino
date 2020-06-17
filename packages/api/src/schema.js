import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    _id: ID!
    user: String!
    token: String!
  }

  input FileInput {
    url: String!
    mimetype: String!
    encoding: String!
  }

  type File {
    url: String!
    mimetype: String!
    encoding: String!
  }
  type Recipe {
    _id: ID!
    title: String!
    description: String!
    steps: [String!]
    images: [File!]
    date: String!
    ingredients: [Ingredient!]!
    mainImage: File!
    author: ID!
  }

  type Ingredient {
    _id: ID!
    name: String!
    recipes: [Recipe]!
  }

  type Query {
    recipes: [Recipe]!
    recipe(id: ID!): Recipe!
    ingredients: [Ingredient]!
    ingredient(id: ID!): Ingredient!
  }

  type Mutation {
    login(usr: String!, pwd: String!): User!
    logout(userid: ID!, token: String!): User!
    signin(usr: String!, pwd: String!): User!
    uploadFile(userid: ID!, token: String!, upload: Upload!): File!
    addRecipe(
      userid: ID!
      token: String!
      title: String!
      description: String!
      steps: [String!]!
      images: [FileInput!]!
      ingredients: [ID!]!
      mainImage: FileInput!
    ): Recipe!
    addIngredient(userid: ID!, token: String!, name: String!): Ingredient!
    removeRecipe(userid: ID!, token: String!, id: ID!): Recipe!
    removeIngredient(userid: ID!, token: String!, id: ID!): Ingredient!
  }
`;

export { typeDefs as default };
