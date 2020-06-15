import { gql } from "apollo-server";

const typeDefs = gql`
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }
  type Recipe {
    _id: ID!
    title: String!
    description: String!
    steps: [String!]
    images: [String!]
    date: String!
    ingredients: [Ingredient!]!
    mainImage: String!
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
    uploadFile(upload: Upload!): String!
    addRecipe(
      title: String!
      description: String!
      steps: [String!]!
      iamges: [String!]!
      ingredients: [ID!]!
      mainImage: String!
    ): Recipe!
    addIngredient(name: String!): Ingredient!
    removeRecipe(id: ID!): Recipe!
    removeIngredient(id: ID!): Ingredient!
  }
`;

export { typeDefs as default };
