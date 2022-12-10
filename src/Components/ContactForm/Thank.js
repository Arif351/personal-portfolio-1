import React from 'react';

const Thank = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Thank You</h2>
                <p>You send message successfully.</p>
                <div className="card-actions justify-center">
                    <button className="badge badge-primary">GO home</button>
                </div>
            </div>
        </div>
    );
};

export default Thank;