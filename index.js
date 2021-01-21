const express = require('express');
const bodyParser=require('body-parser');
const route=require('./public/routes/group.routes');
require('./public/data-access/db.config');
const app = express();
const port = 3000;
app.use(bodyParser.json());

app.use(route);

app.use((req, res, next) => {
  const err = new Error(`${req.method} ${req.url} Not Found`);
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});
 

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`server is listening `);
});