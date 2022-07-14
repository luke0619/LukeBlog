import Cards from "../bootstrap/Cards";

import { getAllArticles } from '../../lib/api';
import Spinners from "../UI/Spinners";

import useHttp from '../../hooks/use-http';
import { useEffect } from "react";
import { useParams } from 'react-router-dom';

const Single = (props) => {
    const params = useParams();
    const {sendRequest, status, data: loadedQuotes, error} = useHttp(getAllArticles, true);

    const { typeId } = params;

    useEffect(() => {
        sendRequest(typeId);
      }, [sendRequest, typeId]);

      if (status === 'pending') {
        return (
            <Spinners />
        )
    }

    if (error) {
        return <p>{error}</p>
    }

    if (status === 'completed' && (loadedQuotes === 0)) {
        return <p>沒有找到相應的結果</p>
    }

    return (
        <Cards quotes={loadedQuotes} type={typeId}/>
    )
}

export default Single;