import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

import classes from './BlogClass.module.css';

import { useEffect } from 'react';
import useHttp from '../../hooks/use-http';
import Spinner from '../../components/UI/Spinners';
import { getAllArticles } from '../../lib/api';
import Col from 'react-bootstrap/Col';

import { NavLink} from 'react-router-dom';

const BlogClass = (props) => {

    const { sendRequest, status, data: loadedQuotes, error } = useHttp(
        getAllArticles, true
    );

      useEffect(() => {
        sendRequest(props.type);
      }, [sendRequest,props.type]);
     
      if (status === 'pending') {
        return (
          <div className='centered'>
            <Spinner/>
          </div>
        );
      }
    
      if (error) {
        return <p className='centered'>{error}</p>;
      }
    
      if (!loadedQuotes) {
        return <p>No quote found!</p>;
      }

    return (
        <Col>
          <div className={classes.grid}>
            <div className={classes.Layout}>
                <Card style={{ width: '13rem' }}>
                    <Card.Img src={props.image} variant="top" as='img' />
                    <Card.Title as='div' className={classes.font}>{props.title} </Card.Title>
                    <ListGroup variant="flush">
                          {loadedQuotes.map((item) => {
                              return (
                                <div className={classes.No_text_Style} key={item.id}>
                                  <NavLink to={`unique/${item.id}`} as='a'>{item.title}</NavLink>
                                </div>
                              )
                          })}
                    </ListGroup>
                </Card>
            </div>
          </div>
        </Col>
    )
}

export default BlogClass;