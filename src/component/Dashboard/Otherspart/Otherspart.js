import React from 'react';
const secondPart = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-5 rounded m-5'>
            <div className='shadow p-5  h-44'>
                <h1 className='text-xl flex items-start'>Website View</h1>
                <p className='mt-5'>These are paid services. To know more click here</p>
            </div>
            <div className='shadow p-5 h-44'>
                <h1 className='text-xl flex items-start'>Product Views</h1>
                <p className='mt-5 text-blue-500'>post your lead</p>
            </div>
        </div>
    );
};

export default secondPart;