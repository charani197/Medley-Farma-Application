const mongoose = require("mongoose");
// Middleware
const db = 'mongodb+srv://medley-pharma:charani000@cluster0.jzhyjyb.mongodb.net/?retryWrites=true&w=majority'

// "mongodb+srv://sample-project:sample-project@cluster0.eozhzvf.mongodb.net/sample-project?retryWrites=true&w=majority"

// Connect to MongoDB using the connection string
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connection successful');
}).catch((e) => {
  console.log('No connection: ${e}');
});

// mongodb://localhost:27017