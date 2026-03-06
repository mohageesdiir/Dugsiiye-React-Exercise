import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'

function Nav() {
    const {isAuthenticated, logout} = useContext(AuthContext);

    const navigate = useNavigate()

    const handleLogout = ()=> {
        logout();
        navigate("/login")
    }

  return (
    <div className="flex flex-col space-y-4 p-6 bg-gray-200 rounded-md">
      <h1 className="text-bold text-2xl ">Blog Posts</h1>
      <nav className="flex gap-4 text-center ">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold bg-blue-500 rounded-md p-2 text-white"
              : undefined
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold bg-blue-500 rounded-md p-2 text-white"
              : undefined
          }
          to="/login"
        >
          Login
        </NavLink>
        {isAuthenticated && (
          <div className="space-x-4">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold bg-blue-500 rounded-md p-2 text-white"
                  : undefined
              }
              to="/create"
            >
              Create Post
            </NavLink>
            <button
              onClick={handleLogout}
              className="bg-red-600 p-2 text-white rounded-md shadow-sm cursor-pointer"
            >
              LOGOUT
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Nav
