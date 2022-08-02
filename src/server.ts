import express from "express";
import "./database";

const app = express();
const port = 3333;

app.get("/", (req, res) => {
  return res.json({ message: "ciao" });
});

app.post("/", (req, res) => {
  return res.json({ message: "usuario salvo com sucesso" });
});

app.listen(port, () => console.log(`App listening on port ${port}`));
