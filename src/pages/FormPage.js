import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import BlogForm from '../components/blog/BlogForm';
import { Fragment } from 'react';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api'

const FormPage = () => {
    const { sendRequest, status } = useHttp(addQuote);
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/manager');
        }
    }, [status, history]);

    const addArticleHandler = (quoteData, type) => {
        sendRequest(quoteData, type);
    };

    return (
        <Fragment>
            <Header />
            <BlogForm onAddArticle={addArticleHandler} isLoading={status === 'pending'} />
            <Footer />
        </Fragment>
    )
}

export default FormPage;