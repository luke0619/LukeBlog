import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { removeFirebaseData } from '../../lib/firebase-api';

const Accordion_Components = (props) => {
    const removeHandler = () => {
        removeFirebaseData(props.id);       
    }

    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{props.title}</Accordion.Header>
                <Accordion.Body>
                    <p>
                        分類 : {props.type}
                    </p>
                    正文 : {props.text} 
                    <hr />
                    {/* <Button as='button' className={classes.btn}>編輯</Button> */}
                    <Button onClick={removeHandler}>刪除 </Button>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
};

export default Accordion_Components;