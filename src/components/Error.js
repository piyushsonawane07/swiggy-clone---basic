import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    
    return (
        <div className="error" style={{textAlign: 'center', marginTop: '20%'}}>
        <h1 style={{color: 'gray'}}>
            404 | Not Found
        </h1>
        </div>
    );
};

export default Error;
