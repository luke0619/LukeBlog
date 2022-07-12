import { Fragment } from 'react';
import Accordion_Components from './Accordion_Component';

const Accordions = (props) => {
    const arrays = props.articles;

    return (
        <Fragment>
            {arrays.map((item) => <Accordion_Components key={item.id} title={item.title} type={item.type} text={item.text} id={item.id}/> )}
        </Fragment>
    )
}

export default Accordions;