const express = require("express");
const cors = require("cors");
const readArticles = require("./lib/fileReader");

const app = express();

global.articles = readArticles("inventory.json");

//console.log(articles);

app.use(express.json());
app.use(cors());

app.get("/getAllProducts", require("./lib/getAllProducts"));
app.delete("/sellProduct", require("./lib/sellProduct"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app listening on port ${port}!`));
