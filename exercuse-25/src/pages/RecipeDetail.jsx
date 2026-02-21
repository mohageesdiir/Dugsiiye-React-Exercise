
import { useParams, Link } from 'react-router';

function RecipeDetail() {
    const { id } = useParams();
  
  const recipe = {
    id,
    title: 'Sample Recipe',
    ingredients: [
      '2 cups flour',
      '1 cup sugar',
      '3 eggs',
      '1 cup milk'
    ],
    instructions: [
      'Mix dry ingredients',
      'Add wet ingredients',
      'Bake at 350°F for 25 minutes'
    ]
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Link
        to="/recipes"
        className='className="text-rose-600 hover:text-rose-700 mb-4 inline-block"'
      >
        {" "}
        ← Back to Recipes
      </Link>
      <h1 className="text-3xl font-bold mb-6">{recipe.title}</h1>
      <div  className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
          <ol className=" list-inside space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ol>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Instructions</h2>
          <ul className=" list-inside space-y-2">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail
