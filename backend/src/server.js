import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({ 
    path: './.env' 
});

connectDB()
.then(() => {
  const PORT = process.env.PORT || 8000;
  app.on('error', (err) => {
    console.log('Error : ', err);
    throw err;
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})
.catch((error) => {
  console.log("Database Connection Failed ", error);
})