const main = require("./index")
const db = new main.Main("./test.json")
db.delete("hello")