import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { PostsContext } from '../context/PostsContext';

const CreatePost = () => {
  const { addPost } = useContext(PostsContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content });
    navigate('/');
  };

  return (
    <div className='flex flex-col w-7xl mt-3 m-auto bg-white shadow-md rounded-md p-4'>
      <h2 className='text-bold text-xl '>Create a New Post</h2>
      <form onSubmit={handleSubmit} className='flex flex-col py-2 gap-4'>
        <div>
          <label>
            Title:{' '}
            <input
              className='border rounded-md py-2 px-4'
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Content:{' '}
            <textarea
              className='rounded-md border'
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows="5"
              cols="30"
            ></textarea>
          </label>
        </div>
        <button className='rounded-md bg-blue-500 py-2 px-4 w-4xl text-white' type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost; 