import React from 'react';
import Loader from 'react-loader-spinner'

function Loading(props) {
    return (
        <div className= 'flex justify-center items-center'>
            <Loader tyle= 'Puff' color="#00BFFF" height={550} width= {80} />
        </div>
    );
}

export default Loading;