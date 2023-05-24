import { it, expect } from "vitest";
import checkPassword from "./checkPassword";

it("should test password length", () => {
  expect(checkPassword("ilfaitplusde8").isOk).toBe(true);
  expect(checkPassword("ilfaitplusde8").messages).toStrictEqual([]);
  expect(checkPassword("ilf8").isOk).toBe(false);
  expect(checkPassword("i8").messages).toStrictEqual(["Le mot de passe doit comporter au moins 8 caractères"]);
});