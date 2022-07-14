import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import sun from '../../assets/sun.png';
import classes from './Me.module.css';

const Me = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }} border='dark' as="div" className={classes.Me}>
                <Card.Img variant="top" src={sun} />
                <Card.Body>
                    <Card.Title as='h3'>自我介紹</Card.Title>
                    <Card.Text>
                        你好 我叫Luke，喜歡跑步跟健身，流汗讓我愉悅! 股票也小有研究但多數時候是賠錢!
                    </Card.Text>
                    <Button variant="primary" as="a" className={classes.button} onClick={props.onShowResume}>查看履歷表</Button>
                </Card.Body>
            </Card>           
        </div>
    )
}

export default Me;

// 未來想從事網頁相關的工作，歡迎參考我的網站