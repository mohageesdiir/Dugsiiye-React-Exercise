
import { Link } from 'react-router'

function Home() {
  return (
    <div className="flex flex-col m-auto w-2xl ">
      <section>
        <h1 className="font-bold text-3xl text-center ">
          Welcome To Recipe Book
        </h1>
        <p className="text-lg p-4 text-center">
          Discover delicious recipes and start cooking today.{" "}
        </p>
      </section>
      <section className="flex gap-4">
        <div className="bg-rose-600 p-4 shadow-md rounded-md w-80 flex flex-col items-center text-center">
          <h1 className="font-bold text-xl text-white p-4">Browse Recipes</h1>

          <Link to="recipes" className="text-white text-lg px-4">
            Explore our collection of delicious recipes
          </Link>
        </div>
        <div className="bg-rose-600 p-4 shadow-md rounded-md w-80">
          <h1 className="font-bold text-xl text-white p-4 text-center">
            Recipe Categories
          </h1>
          <Link to="categories" className="text-white text-center text-lg p-8">
            Find recipes by category
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home
