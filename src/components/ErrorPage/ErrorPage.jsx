import React from 'react';
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
            <div id="error-page" className='flex flex-col  justify-center h-96 items-center'>
             <h1 className='text-9xl font-bold '>404</h1>            
            <p className='my-3 text-3xl'>Sorry, an unexpected error has occurred.</p>
            <p className='my-2 text-xl'>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
// 

// 

export default ErrorPage;