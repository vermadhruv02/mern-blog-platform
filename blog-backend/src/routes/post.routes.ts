import express from 'express';
import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} from '../controllers/post.controller';

const router = express.Router();

router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/create', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
