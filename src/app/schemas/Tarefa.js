import mongoose from '../../database';

const Schema = mongoose.Schema

const TarefaSchema = new Schema({
  descricao: {
    type: String,
    require: true,
  },
  prazo: {
    type: Date,
    required: false
  },
  completa: {
    type: Boolean,
    required: false
  },
});

export default mongoose.model('Tarefa', TarefaSchema);
