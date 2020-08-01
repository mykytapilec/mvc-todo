import Model from "./model.js";
import View from "./view.js";
import Controller from "./controller.js";
import { save, load } from "./helpers.js";

const state = load();

const model = new Model(state || undefined);
model.on("change", state => save(state));
console.log(model);

const view = new View();
console.log(view);
const controller = new Controller(model, view);

console.log(controller);


// const model = new Model();
// const view = new View();
// const controller = new Controller(model, view);