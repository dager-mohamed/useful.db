# what is main language of useful.db?
**the main language of useful.db is Typescript**
# installation
`npm install useful.db`
# Typescript
```
import { Main } from 'useful.db'

const db = new Main("./example.json")
```
# Javascript
```
const { Main } = require("useful.db")

const db = new Main("./example.json")
```

# examples

```
db.set("example")  /* make a new data */ 
/* --> {"example", "example"} */

db.has("example")
/* --> return true or false */

 db.delete("example")
/* --> delete the data */

db.get("example")
/* --> return data */

db.push("key", ["data"]) /* make a new array data */
/* --> {"key":["data"]} */

db.getAll()
/* return you all data in file */

db.math(5, "+", 5)
/* --> 10 */
```