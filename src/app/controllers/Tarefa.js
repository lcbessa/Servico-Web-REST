import { Router } from 'express';
import Tarefa from '../schemas/Tarefa';

const router = new Router();

router.get('/tarefas', (req, res) => {
  Tarefa.find()
    .then((tarefa) => {
      res.send(tarefa);
    })
    .catch((error) => {
      console.error('Erro ao buscar tarefas no banco de dados', error);
      res.status(400).send({
        error: 'Não foi possível obter tarefas. Tente novamente!',
      });
    });
});

router.get('/tarefas/:id', (req, res) => {
  Tarefa.findById(req.params.id)
    .then((tarefa) => {
      res.send(tarefa);
    })
    .catch((error) => {
      console.error('Erro ao ao obter tarefa no banco de dados', error);
      res.status(400).send({
        error: 'Não foi possível obter os dados da tarefa. Tente novamente!',
      });
    });
});

router.post('/tarefas', (req, res) => {
  const { descricao, prazo, completa } = req.body;
  Tarefa.create({ descricao, prazo, completa })
    .then((tarefa) => {
      res.status(200).send(tarefa);
    })
    .catch((error) => {
      console.error('Erro ao salvar nova tarefa no banco de dados', error);
      res.status(400).send({
        error:
          'Não foi possível salvar tarefa. Verifique os dados e tente novamente',
      });
    });
});

router.put('/tarefas/:id', (req, res) => {
  const { descricao, prazo, completa } = req.body;
  Tarefa.findByIdAndUpdate(
    req.params.id,
    { descricao, prazo, completa },
    { new: true },
  )
    .then((tarefa) => {
      res.status(200).send(tarefa);
    })
    .catch((error) => {
      console.error('Erro ao salvar tarefa no banco de dados', error);
      res.status(400).send({
        error:
          'Não foi possível atuaizar tarefa. Verifique os dados e tente novamente',
      });
    });
});

router.delete('/tarefas/:id', (req, res) => {
  Tarefa.findByIdAndRemove(req.params.id)
    .then(() => {
      res.send({ message: 'Tarefa removida com sucesso!' });
    })
    .catch((error) => {
      console.error('Erro ao remover tarefa do banco de dados', error);
      res
        .status(400)
        .send({ message: 'Erro ao remover tarefa. Tente novamente!' });
    });
});

export default router;
