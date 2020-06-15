import "babel-polyfill";
import { ObjectID } from "mongodb";

const Ingredient = {
  recipes: async (parent, args, ctx, info) => {
    const { db } = ctx;
    const recipes = parent.recipes;
    const collection = db.collection("recipes");
    return collection.find({ _id: { $in: recipes } });
  },
};

export { Ingredient as default };
