const fastify = require('fastify');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/noteRoutes');

const app = fastify();

try {
  mongoose.connect('mongodb://localhost:27017/notes_db');
} catch (e) {
  console.error(e);
}
noteRoutes(app);
app.listen({port:3000}, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});
