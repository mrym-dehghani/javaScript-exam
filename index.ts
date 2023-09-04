import {
  clearInputEvent,
  createNumberEvent,
  sumNumberEvent,
} from "./src/events.js";

import { clearInput, createRandomButton, sumNumbers } from "./src/importer.js";

createRandomButton?.addEventListener("click", createNumberEvent);

sumNumbers?.addEventListener("click", sumNumberEvent);

clearInput?.addEventListener("click", clearInputEvent);
