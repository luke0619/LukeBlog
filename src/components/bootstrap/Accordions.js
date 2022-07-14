import { Fragment } from 'react';
import AccordionComponents from './Accordion_Component';

const Accordions = (props) => {
    const arrays = props.articles;

    return (
        <Fragment>
            {arrays.map((item) => <AccordionComponents key={item.id} title={item.title} type={item.type} text={item.text} id={item.id}/> )}
        </Fragment>
    )
}

export default Accordions;