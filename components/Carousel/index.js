import { Carousel } from 'antd';
import Styles from './Carousel.less';

const CarouselComponent = ({}) => {
    return (
        <Carousel autoplay>
            <div>
                <img src={'https://cdn.pixabay.com/photo/2014/10/22/16/38/ingredients-498199_1280.jpg'} />
            </div>
            <div>
                <img src={'https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466_1280.jpg'} />
            </div>
            <div>
                <img src={'https://cdn.pixabay.com/photo/2018/02/21/22/44/oatmeal-3171723_1280.jpg'} />
            </div>
      </Carousel>
    )
}

export default CarouselComponent;