import dotenv from 'dotenv';
dotenv.config();
import connectToDatabase from "./db/index";
import app from './app';

connectToDatabase()
.then(()=> {
  app.on('error', (error)=>{
    console.error('Server error:', error);
    throw error;
  })
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || 3000}`);
  });
})
.catch((error) => {
  console.error('Failed to connect to the database:', error);
  process.exit(1);
});
