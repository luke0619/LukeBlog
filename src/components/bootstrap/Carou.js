import { Carousel } from 'react-bootstrap'
import apex from '../../assets/apex.jpg';
import elden from '../../assets/ELDEN.jpg';
import classes from './Carou.module.css';
import maple from '../../assets/maple.jpg';

const Carou = () => {
    return (
        <Carousel fade className={classes.Carousel} interval="5000">
            <Carousel.Item >
                <img
                    className='d-block w-100'
                    src={maple}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>楓之谷</h3>
                    <p>懷舊RPG遊戲</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={apex}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <p>經典射擊吃雞遊戲</p>
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