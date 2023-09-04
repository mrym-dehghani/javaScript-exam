import { getPrimes } from "./functions.js";
import { inputMain } from "./importer.js";

export const createNumberEvent = () => {
  const randomNumber = Math.floor(Math.random() * 100000);
  if (inputMain) inputMain.value = randomNumber.toString();
};

export const sumNumberEvent = () => {
  const inputValue = inputMain?.value;
  console.log(getPrimes(inputValue));
};

export const clearInputEvent = () => {
  inputMain!.value = "";
  console.log(getPrimes([]));
};
