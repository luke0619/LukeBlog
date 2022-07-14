import { useParams } from "react-router-dom";

import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

import Spinners from "../components/UI/Spinners";
import { useEffect } from "react";
import Layout from "../components/Layout/Layout";

const IdPage = (props) => {

    const params = useParams()

    const { articleId } = params;

    const { sendRequest, status, data: loadedQuote, error } = useHttp(
        getSingleQuote,
        true
      );

      useEffect(() => {
        sendRequest(articleId);
      }, [sendRequest, articleId])

    if (status === 'pending') {
        return (
          <div className='centered'>
            <Spinners/>
          </div>
        );
    }
    
    if (error) {
    return <p className='centered'>{error}</p>;
    }
    
    if (!loadedQuote.text) {
        return <p>No quote found!</p>;
    }
    

    return (
        <Layout>{loadedQuote.text} {loadedQuote.title}</Layout>
    )
}

export default IdPage;