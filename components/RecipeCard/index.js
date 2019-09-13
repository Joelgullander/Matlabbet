import { Card, Col, Row, Rate } from 'antd';

const RecipeCard = ({}) => {
    return (
        <Card 
            bordered={true}
            cover={
                <img
                  alt="example"
                  src="https://www.citygross.se/images/recipes/R43930.jpg"
                />
              }
        >
            <Rate disabled defaultValue={2} />
            Card content
        </Card>
    )
}

export default RecipeCard;