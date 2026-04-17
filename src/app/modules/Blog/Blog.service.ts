import { TBlog } from './Blog.interface';
import { BlogModel } from './Blog.model';

const createBlogIntoDB = async (payload: TBlog): Promise<TBlog> => {
  const result = await BlogModel.create(payload);
  return result;
};

const getAllBlogsFromDB = async () => {
  const result = await BlogModel.find();
  return result;
};

const getSingleBlogFromDB = async (id: string) => {
  const result = await BlogModel.findById(id);
  return result;
};

const updateBlogInDB = async (id: string, payload: Partial<TBlog>) => {
  const result = await BlogModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteBlogFromDB = async (id: string) => {
  const result = await BlogModel.findByIdAndDelete(id);
  return result;
};

export const BlogService = {
  createBlogIntoDB,
  getAllBlogsFromDB,
  getSingleBlogFromDB,
  updateBlogInDB,
  deleteBlogFromDB,
};
