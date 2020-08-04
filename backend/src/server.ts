import express from 'express';

const app = express();

app.get('/', (request, respose) => {
  return respose.send("oiii");
})

app.listen(3333);