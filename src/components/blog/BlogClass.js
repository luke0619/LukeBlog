import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

import classes from './BlogClass.module.css';

const BlogClass = (props) => {
    return (
        <div className={classes.Layout}>
            <Card style={{ width: '13rem' }}>
                <Card.Img src={props.image} variant="top" as='img' />
                <Card.Title >{props.title}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>文章一</ListGroup.Item>
                    <ListGroup.Item>文章二</ListGroup.Item>
                    <ListGroup.Item>文章三</ListGroup.Item>
                    <ListGroup.Item>文章四</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}

export default BlogClass;