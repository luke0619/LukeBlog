import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import BlogClass from '../components/blog/BlogClass';

import Carou from '../components/bootstrap/Carou';
import Me from '../components/bootstrap/Me';
// import Weather from '../components/API/Weather';

import { Fragment } from "react";
import classes from './BlogPage.module.css';

import daily from '../assets/daily.jpg';
import knowledge from '../assets/knowledge.jpg';
import sport from '../assets/sport.jpg';
// import { Card, Row, Col } from 'react-bootstrap'

import { Dropdown } from 'react-bootstrap'

const Dummydata = [
    {
        id: '1',
        title: '日常生活',
        image: daily
    },
    {
        id: '2',
        title: '知識筆記',
        image: knowledge
    },
    {
        id: '3',
        title: '運動紀錄',
        image: sport
    }
]

const BlogPage = () => {
    return (
        <Fragment>
            <Header />
            <Dropdown.Divider />
            <div className={classes.layout}>
                <Carou />
                <Me />
            </div>

            <div className={classes.Blogs}>
                {Dummydata.map((data) => {
                    return <BlogClass title={data.title} key={data.id} image={data.image} />
                })}
                {/* <Weather /> */}
            </div>
            <Footer />
        </Fragment >
    )
}

export default BlogPage;