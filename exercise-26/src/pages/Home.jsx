import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { PostsContext } from '../context/PostsContext';

const Home = () => {
  const { posts } = useContext(PostsContext);
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get('search') || '';

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchValue = formData.get('search');
    navigate(`/?search=${encodeURIComponent(searchValue)}`);
  };

  return (
    <div className='flex flex-col w-7xl mt-3 m-auto bg-white shadow-md rounded-md p-4 '>
      <h2 className='text-bold text-xl '>Blog Posts</h2>
      <form onSubmit={handleSearch} className='flex flex-col py-2 gap-4'>
        <input
          type="text"
          name="search"
          placeholder="Search posts"
          defaultValue={searchTerm}
          className='rounded-md text-lg border py-2 px-4 w-4xl'
        />
        <button 
          type="submit"
          className='rounded-md bg-blue-500 py-2 px-4 w-4xl text-white'
        >Search</button>
      </form>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home; 