import express from "express";
import initVerseController from "./controllers/verseController.mjs";

const app = express();
const verseController = initVerseController();

// app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send("hello world");
})

app.get('/verse', verseController.fetchPassage)


const PORT = process.env.PORT || 3000;
app.listen(PORT);