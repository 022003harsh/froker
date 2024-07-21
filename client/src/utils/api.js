
export const API_BASE_URL = process.env.REACT_APP_BASE_URL;

export const getRecentBlogsUrl = `${API_BASE_URL}/blog/getRecentBlogs`;
export const getAllBlogsUrl = `${API_BASE_URL}/blog/getAllBlogs`;
export const getBlogUrl = (id) => `${API_BASE_URL}/blog/getBlog/${id}`;
export const likeBlogUrl = (id) => `${API_BASE_URL}/blog/like/${id}`;
