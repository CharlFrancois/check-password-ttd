import { it, expect } from "vitest";
import checkPassword from "./checkPassword";

it("should test password length", () => {
  expect(checkPassword("Ilfaitplusde8").isOk).toBe(true);
  expect(checkPassword("Ilfaitplusde8").messages).toStrictEqual([]);
  expect(checkPassword("iLlf8").isOk).toBe(false);
  expect(checkPassword("iLlf8").messages).toStrictEqual([
    "Le mot de passe doit comporter au moins 8 caractères",
  ]);
});

it("should test password containe at lest one number", () => {
  expect(checkPassword("Ilfaitplusde8").isOk).toBe(true);
  expect(checkPassword("Ilfaitplusde8").messages).toStrictEqual([]);
  expect(checkPassword("iazeazeaZ").isOk).toBe(false);
  expect(checkPassword("iazeazeaZ").messages).toStrictEqual([
    "Le mot de passe doit contenir au moins 1 chiffre",
  ]);
});

it("should test password containe at lest one uppercase", () => {
  expect(checkPassword("iLfaitplusde8").isOk).toBe(true);
  expect(checkPassword("iLfaitplusde8").messages).toStrictEqual([]);
  expect(checkPassword("ilfaitplusde8").isOk).toBe(false);
  expect(checkPassword("ilfaitplusde8").messages).toStrictEqual([
    "Le mot de passe doit contenir au moins une lettre majuscule",
  ]);
});
