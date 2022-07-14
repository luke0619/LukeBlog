import { Carousel } from 'react-bootstrap'
import one from '../../assets/one.jpg';
import elden from '../../assets/ELDEN.jpg';
import classes from './Carou.module.css';
import modern from '../../assets/modern.jpg';


const Carou = () => {
    return (
        <Carousel fade className={classes.Carousel} interval="5000">
            <Carousel.Item >
                <img
                    className='d-block w-100'
                    src={modern}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>雷蒙娜-山丘</h3>
                    <p>美國加利福尼亞州</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={one}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>101大樓</h3>
                    <p>臺北-信義區</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={elden}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>艾爾登法環</h3>
                    <p>2022年度神座</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Carou;