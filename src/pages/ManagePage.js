import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import BlogManage from '../components/blog/BlogManage';

import { Fragment } from 'react';

const ManagePage = () => {
    return (
        <Fragment>
            <Header />
            <BlogManage />
            <Footer />
        </Fragment>
    )
}

export default ManagePage;