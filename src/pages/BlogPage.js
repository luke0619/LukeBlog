import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import BlogClass from '../components/blog/BlogClass';

import Carou from '../components/bootstrap/Carou';
import Me from '../components/bootstrap/Me';
// import Weather from '../components/API/Weather';

import { Fragment, useState } from "react";
import classes from './BlogPage.module.css';

import daily from '../assets/daily.jpg';
import knowledge from '../assets/knowledge.jpg';
import sport from '../assets/sport.jpg';
import journey from '../assets/journey.jpg';
import photo from '../assets/photo.jpg';
import { Container, Row, Col} from 'react-bootstrap'

import { Dropdown } from 'react-bootstrap'

import Resume from '../components/resume/Resume';

const Dummydata = [
    {
        id: '1',
        title: '日常生活',
        image: daily,
        type: 'life'
    },
    {
        id: '2',
        title: '知識筆記',
        image: knowledge,
        type: 'knowledge'
    },
    {
        id: '3',
        title: '運動紀錄',
        image: sport,
        type: 'sports'
    },
    {
        id: '4',
        title: '旅行紀念',
        image: journey,
        type: 'journey'
    },
    {
        id: '5',
        title: '攝影作品',
        image: photo,
        type: 'photo'
    }
]

const BlogPage = () => {
    const [resumeIsShown, setCartIsShown] = useState(false);

    const showResumeHandler = () => {
        setCartIsShown(true);
    }

    const hideResumeHandler = () => {
        setCartIsShown(false);
    }

    return (
        <Fragment> 
    
            <Header />
            <div className={classes.center}>    
                {resumeIsShown && <Resume onClose={hideResumeHandler} />}
            </div>
            <Dropdown.Divider />
                <div className={classes.layout}>
                <Container>
                    <Row>
                        <Col md={9} xs={12} as='div' className={classes.center}>
                            <Carou/>
                        </Col>
                        <Col md={3} xs={12} as='div' className={classes.center}>
                            <Me onShowResume={showResumeHandler}/>
                        </Col>
                    </Row>
                </Container>
                </div>


            <div className={classes.Blogs}>
                <Container>
                    <Row>
                    {Dummydata.map((data) => {
                        return <BlogClass title={data.title} key={data.id} image={data.image} type={data.type}/>
                    })}
                    </Row>
                </Container>    
                {/* <Weather /> */}
            </div>
            <Footer />
        </Fragment >
    )
}

export default BlogPage;