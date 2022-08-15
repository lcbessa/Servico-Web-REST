import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/servico-web-rest', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;

export default mongoose;
