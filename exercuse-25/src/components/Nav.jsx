
import { NavLink } from 'react-router'

function Nav() {
  return (
    <div>
      <header className="flex justify-around p-4 shadow-sm mb-8">
        <h1 className="text-rose-700 font-bold text-xl">Recipe Book</h1>
        <nav className="flex gap-7">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-bold underline text-red-500" : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            to="recipes"
            className={({ isActive }) =>
              isActive ? "font-bold underline text-red-500" : undefined
            }
          >
            Recipes
          </NavLink>
          <NavLink
            to="categories"
            className={({ isActive }) =>
              isActive ? "font-bold underline text-red-500" : undefined
            }
          >
            Categories
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Nav
