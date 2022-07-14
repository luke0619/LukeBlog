import Accordions from "../bootstrap/Accordions";
import { getAllQuotes } from '../../lib/api';
import useHttp from "../../hooks/use-http";
import Spinners from "../UI/Spinners";

import { useEffect } from "react";

const BlogManage = () => {
    const { sendRequest, status, data: loadedArticles, error } = useHttp(getAllQuotes, true);
    

    useEffect(() => {
        sendRequest();
    }, [sendRequest])

    if (status === 'pending') {
        return (
            <Spinners />
        )
    }

    if (error) {
        return <p>{error}</p>
    }

    if (status === 'completed' && (loadedArticles === 0)) {
        return <p>沒有找到相應的結果</p>
    }

    return (
        <Accordions articles={loadedArticles} />
    )
}

export default BlogManage;