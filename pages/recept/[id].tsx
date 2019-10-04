import { NextPage, NextPageContext } from 'next';
import { Recipe } from '../../types/Recipe';
import axios from 'axios';

interface MyPropsInterface {
    recipe: Recipe
}

interface Context extends NextPageContext {

} 

interface ServerResponse {
    data: Recipe
}

const RecipePage: NextPage<MyPropsInterface> = ({ recipe }) => (
    <h2>Single Recipe: {recipe.name} </h2>
)

RecipePage.getInitialProps = async (ctx: Context): Promise<MyPropsInterface> => {
    const recipe : ServerResponse = await axios.get(`http://localhost:5000/api/v1/Recipe/${ctx.query.id}`);
    return {
        recipe: recipe.data
    }
}


export default RecipePage;