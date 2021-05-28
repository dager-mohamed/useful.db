import { Main } from "./index";

const db = new Main("./test.json");

const main = db.getAll()

console.log(main)