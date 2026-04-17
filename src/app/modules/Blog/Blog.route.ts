import express from 'express';
import { BlogController } from './Blog.controller';
import { BlogValidation } from './Blog.validation';
import validateRequest from '../../middlewires/validateRequest';

const router = express.Router();

router.post(
  '/create-blog',
  validateRequest(BlogValidation.createBlogValidation),
  BlogController.createBlog,
);

router.get('/:id', BlogController.getSingleBlog);

router.put(
  '/:id',
  validateRequest(BlogValidation.updateBlogValidation),
  BlogController.updateBlog,
);

router.delete('/:id', BlogController.deleteBlog);

router.get('/', BlogController.getAllBlogs);

export const BlogRouter = router;
