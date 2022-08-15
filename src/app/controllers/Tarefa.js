import { Router } from 'express';
import Tarefa from '../schemas/Tarefa';

const router = new Router();

router.get('/', (req, res) => {
  res.send('OK')
})

router.get('/tarefas', (req, res) => {
  Tarefa.find()
    .then((tarefa) => {
      if (tarefa.length > 0) {
        res.status(200).send(tarefa);
      }
      else {
        return res.status(404).send({ erro: 'Nenhuma tarefa encontrada' });
      }
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
      if (tarefa) {
        res.status(200).send(tarefa);
      }
      else {
        return res.status(404).send({ erro: 'Tarefa não encontrada' });
      }
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
      if (tarefa) {
        res.status(200).send({ mensagem: 'Tarefa alterada com sucesso' });
      }
      else {
        return res.status(404).send({ erro: 'Tarefa não encontrada' });
      }
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
    .then((tarefa) => {
      if (tarefa) {
        res.status(200).send({ message: 'Tarefa removida com sucesso!' });
      }
      else {
        return res.status(404).send({ erro: 'Tarefa não encontrada' });
      }
    })
    .catch((error) => {
      console.error('Erro ao remover tarefa do banco de dados', error);
      res
        .status(400)
        .send({ message: 'Erro ao remover tarefa. Tente novamente!' });
    });
});

export default router;
