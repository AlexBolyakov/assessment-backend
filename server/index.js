const express = require("express");
const cors = require("cors");
//insert const greetings = require("./db.json");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller');
const { getFortune } = require('./controller');
const { createFortuneList } = require('./controller');
const { fortuneSearch } = require('./controller');
const { deleteFortune } = require('./controller');

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/list", createFortuneList);
app.get("/api/list/:index", fortuneSearch);
app.delete("/api/list/:index", deleteFortune);

app.listen(4000, () => console.log("Server running on 4000"));
 