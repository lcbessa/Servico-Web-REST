import express from 'express';
import Tarefa from './app/controllers';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/tarefa', Tarefa);

console.log(`Servidor rodando na porta ${port}`);
app.listen(port);
