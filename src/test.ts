import { Main } from "./index";

const db = new Main("./test.json");

db.push(["hello"], "hello");
