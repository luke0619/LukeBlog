import { Fragment, useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';

import LoadingSpinner from '../UI/Spinners';
import classes from './BlogForm.module.css';
import Form from 'react-bootstrap/Form';


const BlogForm = (props) => {
    const [isEntering, setIsEntering] = useState(false);

    const titleInputRef = useRef();
    const textInputRef = useRef();
    const typeInputRef = useRef();

    function submitFormHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredText = textInputRef.current.value;
        const enteredType = typeInputRef.current.value;

        // optional: Could validate here

        props.onAddArticle({ title: enteredTitle, text: enteredText, type: enteredType });
    }

    const finishEnteringHandler = () => {
        setIsEntering(false);
    };

    const formFocusedHandler = () => {
        setIsEntering(true);
    };

    return (
        <Fragment>
            <Prompt
                when={isEntering}
                message={(location) =>
                    'Are you sure you want to leave? All your entered data will be lost!'
                }
            />
            <h1>新增表單介面</h1>
            <form
                onFocus={formFocusedHandler}
                className={classes.form}
                onSubmit={submitFormHandler}
            >
                {props.isLoading && (
                    <div className={classes.loading}>
                        <LoadingSpinner />
                    </div>
                )}

                <div className={classes.layout}>
                    <div className={classes.control}>
                        <div className={classes.rule}>
                            <label htmlFor='title'>標題</label>
                            <input type='text' id='title' ref={titleInputRef} />
                        </div>
                    </div>
                    <div className={classes.control}>
                        <div className={classes.rule}>
                            <label htmlFor='type'>日記類型</label>
                            {/* <input type='text' id='type'  /> */}
                            <Form.Select aria-label="Default select example" id='type' ref={typeInputRef}>
                                <option value="life">日常生活</option>
                                <option value="knowledge">知識筆記</option>
                                <option value="sports">運動紀錄</option>
                                <option value="journey">旅行紀念</option>
                                <option value="box">開箱分享</option>
                                <option value="photo">攝影作品</option>
                            </Form.Select>
                        </div>
                    </div>
                </div>

                {/* <div className={classes.layout}>
                    <div className={classes.control}>
                        <div className={classes.rule}>
                            <label htmlFor='title'>心情</label>
                            <input type='text' id='title' ref={titleInputRef} />
                        </div>
                    </div>
                    <div className={classes.control}>
                        <div className={classes.rule}>
                            <label htmlFor='type'>上傳照片</label>
                            <input type='text' id='type' ref={typeInputRef} />
                        </div>
                    </div>
                </div> */}
                <div className={classes.control2}>
                    <label htmlFor='text'>文章內容</label>
                    <textarea id='text' rows='10' ref={textInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button onClick={finishEnteringHandler} className={classes.btn}>提交文章</button>
                </div>
            </form>
        </Fragment >
    );
};

export default BlogForm;
