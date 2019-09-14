import { useRouter } from 'next/router';

const SingleRecipe = ({}) => {
    const router = useRouter();
    return (
        <h2>Single Recipe: {router.query.id}</h2>
    )
} 

export default SingleRecipe;