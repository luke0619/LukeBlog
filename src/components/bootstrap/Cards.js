import { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import Breadcrumbs from "../bootstrap/Bread";
import BlogItem from '../blog/BlogItem';

function Cards(props) {
  const quoteArr = props.quotes;

  return (
    <Fragment>
      <Card>
        <Card.Header as="h5">
          <Breadcrumbs type={props.type}/>
        </Card.Header>
        <Card.Body>
          {quoteArr.map((quote) => {
            return <BlogItem type={quote.type} text={quote.text} title={quote.title} key={quote.id}/>
          })}
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </Fragment>
  );
}

export default Cards;