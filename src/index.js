import express from 'express';
import { Tarefa } from './app/controllers';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', Tarefa);

console.log(`Servidor rodando na porta ${port}`);
app.listen(port);
