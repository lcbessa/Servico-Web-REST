import mongoose from '../../database';

const TarefaSchema = new mongoose.Schema({
  descricao: {
    type: String,
    require: true,
  },
  prazo: {
    type: Date,
  },
  completa: {
    type: Boolean,
  },
});

export default mongoose.model('Tarefa', TarefaSchema);
