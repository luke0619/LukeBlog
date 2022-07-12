import { useState, useRef, useContext, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import Dropdown from './Dropdown';
import AuthContext from '../../store/auth-context';
import classes from './Login.module.css';
import Spinners from '../UI/Spinners';

const Login = () => {
    const history = useHistory()
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    const [isLoading, setIsLoading] = useState(false);

    const logoutHandler = () => {
        authCtx.logout();
        // optional: redirect the user
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        setIsLoading(true);

        fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA2CMNITeDtz749uIMp7SEGaNzkmVn-FOo", {
            method: "POST",
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            setIsLoading(false);
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then((data) => {
                    let errorMessage = 'Authentication failed!';

                    throw new Error(errorMessage);
                });
            }
        }).then((data) => {
            const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000));
            authCtx.login(data.idToken, expirationTime.toISOString());
            history.replace('/');
        }).catch((err) => {
            alert(err.message);
        })
    }

    return (
        <>
            <Form className={classes.Login} as='form' onSubmit={submitHandler}>
                {!isLoggedIn &&
                    <div className={classes.test}>
                        <Form.Group controlId="formBasicEmail" className={classes.formgroup}>
                            <Form.Label as='label'>信箱</Form.Label>
                            <Form.Control type="email" placeholder="輸入信箱地址" ref={emailInputRef} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className={classes.formgroup}>
                            <Form.Label as='label'>密碼</Form.Label>
                            <Form.Control type="password" placeholder="輸入密碼" className={classes.control} ref={passwordInputRef} />
                        </Form.Group>
                    </div>}
                {!isLoggedIn && (<Button type='submit'>登入</Button>)}
                {isLoggedIn && (<Dropdown />)}
                {isLoggedIn && (<Button onClick={logoutHandler}>登出</Button>)}
                {isLoading && <Spinners />}
            </Form>
        </>
    );
}

export default Login;