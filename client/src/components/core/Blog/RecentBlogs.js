import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const RecentBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 9;

    useEffect(() => {
        axios.get('http://localhost:4000/api/v1/blog/getAllBlogs')
            .then(response => {
                setBlogs(response.data.data);
            })
            .catch(error => {
                setError('There was an error fetching the blogs!');
                console.error(error);
            });
    }, []);

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-GB', options);
    }

    const truncateTitle = (title, maxLength = 15) => {
        if (title.length <= maxLength) return `Title: ${title}`;
        return `Title: ${title.substring(0, maxLength)}...`;
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(blogs.length / blogsPerPage);
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    return (
        <div className="container mx-auto px-4 lg:px-0 w-full max-w-2xl lg:max-w-5xl mt-20">
            <h1 className="text-4xl mb-6 lg:mb-10 text-richblack-100">Recent Posts</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                {/* {currentBlogs.map(blog => (
                    <li key={blog._id} className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-200">
                        <Link to={`/blog/${blog._id}`} className="text-xl font-semibold mb-2">{blog.blogTitle}</Link>
                        <p className="mt-2">Likes: {blog.likes}</p>
                    </li>
                ))} */}
                {error && <p className="text-red-500 text-center">{error}</p>}
                {currentBlogs.map(blog => (
                    <Link key={blog._id} to={`/blog/${blog._id}`} className="">
                        <img src={blog.thumbnail} alt={blog.blogTitle} className="mb-4 w-full h-[250px] lg:h-[280px] rounded-2xl object-cover" />
                        <div className='pl-4 lg:pl-0'>
                            <p className="mb-4 text-md text-orange-100">by {blog.author} - {formatDate(blogs[0].createdAt)}</p>
                            <h2 className=" text-sm lg:text-base font-medium mb-2">{truncateTitle(blogs[0].blogTitle)}</h2>
                            <p className="mb-4 text-sm lg:text-base text-richblack-200 leading-5">{blog.description[1]?.descContent.substring(0, 100)}...</p>
                            <p className="mb-4 text-md text-orange-100 font-semibold underline">Read More...</p>
                        </div>
                    </Link>
                ))}
            </div>


            <div className="mt-6 flex justify-center gap-1 ">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`border border-richblack-400 rounded-full p-2 ${currentPage === 1 ? 'opacity-50' : 'bg-gray-200 hover:bg-[#f4f3f3]'}`}
                >
                    <FaChevronLeft className='w-4 h-4' />
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={`p-2 flex justify-center items-center rounded-full border border-richblack-400 ${currentPage === index + 1 ? 'bg-[#f4f3f3]' : 'hover:bg-[#e7e6e6]'}`}
                    >
                        <p className='h-4 w-4 flex items-center justify-center'>
                            {index + 1}
                        </p>
                    </button>

                ))}
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`border border-richblack-400 rounded-full p-2 ${currentPage === totalPages ? 'opacity-50' : 'bg-gray-200 hover:bg-[#f4f3f3]'}`}
                >
                    <FaChevronRight className='w-4 h-4' />
                </button>
            </div>
        </div>
    );
};

export default RecentBlogs;
