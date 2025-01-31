import React, { useEffect, useState } from 'react';
import '../css/MyBlogsPage.css';

const MyBlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [updatedBlog, setUpdatedBlog] = useState({
    title: '',
    content: '',
    category: '',
  });

  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://localhost:4000/blogs');
      const data = await response.json();
      setBlogs(data.blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
 
  const handleEditClick = (blog) => {
    setEditingBlog(blog._id);
    setUpdatedBlog({
      title: blog.title,
      content: blog.content,
      category: blog.category,
    });
  };
 
  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:4000/blogs/update/${editingBlog}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBlog),
      });

      if (response.ok) {
        fetchBlogs(); 
        setEditingBlog(null);
      } else {
        console.log('Failed to update blog');
      }
    } catch (error) {
      console.log('Error updating blog:', error);
    }
  };
 
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/blogs/delete/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchBlogs();  
      } else {
        console.log('Failed to delete blog');
      }
    } catch (error) {
      console.log('Error deleting blog:', error);
    }
  };

  return (
    <div>
      <div className="my-blogs">
        {blogs.length > 0 ? (
          <ul>
            {blogs.map((blog) => (
              <li key={blog._id}>
                {editingBlog === blog._id ? (
                  <div>
                    <h3>Edit Blog</h3>
                    <input
                      type="text"
                      value={updatedBlog.title}
                      onChange={(e) => setUpdatedBlog({ ...updatedBlog, title: e.target.value })}
                    />
                    <textarea
                      value={updatedBlog.content}
                      onChange={(e) => setUpdatedBlog({ ...updatedBlog, content: e.target.value })}
                    />
                    <input
                      type="text"
                      value={updatedBlog.category}
                      onChange={(e) => setUpdatedBlog({ ...updatedBlog, category: e.target.value })}
                    />
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={() => setEditingBlog(null)}>Cancel</button>
                  </div>
                ) : (
                  <div>
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>
                    <p><em>{blog.category}</em></p>
                    <p>Author: {blog.author}</p>
                    <p>Posted on: {new Date(blog.createdAt).toLocaleDateString()}</p>
                    <button onClick={() => handleEditClick(blog)}>Edit</button>
                    <button onClick={() => handleDelete(blog._id)}>Delete</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No blogs found</p>
        )}
      </div>
    </div>
  );
};

export default MyBlogsPage;
