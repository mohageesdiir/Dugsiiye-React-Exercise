import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import NotFound from "./components/NotFound";
import RecipeList from "./pages/RecipeList";
import RecipeDetail from "./pages/RecipeDetail";
import CategoryRecipes from "./pages/CategoryRecipes";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<NotFound/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"recipes",
                element:<RecipeList/>
            },
            {
                path:"recipes/:id",
                element:<RecipeDetail/>
            },
            {
                path:"categories",
                element:<Categories/>,
                children:[
                    {
                        path:"categoryId",
                        element:<CategoryRecipes/>
                    }
                ]
            }
        ]
    }
])

export default router