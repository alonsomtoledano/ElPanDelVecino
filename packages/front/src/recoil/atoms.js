import { atom } from "recoil";

export const adminModeAtom = atom({
  key: "adminModeAtom",
  default: 0
});

export const updateIngredientsAtom = atom({
  key: "updateIngredients",
  default: false
});