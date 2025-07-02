import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import postRoutes from './routes/post.routes';
import userRoutes from './routes/user.routes';
const app = express();

app.use(cors({
  origin: 'http://localhost:5173',  // frontend URL
  credentials: true                 // allow cookies
}));
app.use(express.json({ limit: "16kb"}));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static('public'));
app.use(cookieParser());

// Routes
app.use('/api/v1/user', userRoutes);
app.use('/api/posts', postRoutes);

export default app;
