import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/to-do-list', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;
try {
  let db = mongoose.connection
  db.on('errr', console.error.bind(console, 'Erro de conexao no banco'))
} 
catch (e) {
  console.log(e)
}

export default mongoose;
