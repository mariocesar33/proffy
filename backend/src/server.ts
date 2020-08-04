import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, respose) => {
  return respose.json({ message: "Oi mario"});
})

app.listen(3333, () => {
  console.log("Servidor inicializado, porta 3333");
});