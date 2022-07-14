import { Fragment } from "react";
import classes from './BlogItem.module.css';
import ELDEN from '../../../src/assets/ELDEN.jpg'

const BlogItem = (props) => {
    return (
        <Fragment>
            <div className={classes.BlogItems}>
                <div className={classes.BlogItem}>
                    <img src={ELDEN} alt="測試圖片"/>
                    <div className={classes.content}>
                    <h2>{props.title}</h2>
                        <p>{props.text}</p>
                        <p>{props.type}</p>
                        <h5>2022/07/12</h5>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default BlogItem;