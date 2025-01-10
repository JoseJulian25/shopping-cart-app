import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import './Loading.css'

const Loading = ({}) => {

    return (
        <>
                <div className="loading-container">
                    <ProgressSpinner />
                </div>
            
        </>
    );
};

export default Loading;