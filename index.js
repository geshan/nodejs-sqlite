const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const quotesRouter = require('./routes/quotes');

app.use(express.json());

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.use('/quotes', quotesRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
