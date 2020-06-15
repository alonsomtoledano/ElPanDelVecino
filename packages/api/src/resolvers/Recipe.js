import "babel-polyfill";
import { ObjectID } from "mongodb";

const Recipe = {
  ingredients: async (parent, args, ctx, info) => {
    const { db } = ctx;
    const ingredients = parent.ingredients;
    const collection = db.collection("ingredients");
    const queries = ingredients.map((ingredient) =>
      collection.findOne({ _id: ingredient })
    );
    return await Promise.all(queries);
  },
};

export { Recipe as default };
