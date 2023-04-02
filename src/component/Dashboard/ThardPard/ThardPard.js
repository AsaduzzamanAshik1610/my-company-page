import React from 'react';
import {TbReload } from 'react-icons/tb';
const ThardPard = () => {
    return (
        <div className='m-5'>
            <h1 className='flex items-start text-xl text-blue-800 mt-3'>INQUIRIES</h1>
          <div className='grid grid-cols-4 gap-4 mt-5 rounded  h-40'>
            <div className='shadow flex items-start'>
             <h3>Inquiries sent</h3>
              <div className='text-8xl text-gray-500 p-4 flex justify-center'>
               <TbReload/>
              </div>
            </div>
            <div className='shadow flex items-start'>
             <h3>Inquiries sent</h3>
             <div className='text-8xl text-gray-500 p-4 flex justify-center'>
             <TbReload/>
             </div>
            </div>
            <div className='shadow flex items-start'>
             <h3>Inquiries sent</h3>
             <div className='text-8xl text-gray-500 p-4 flex justify-center'>
             <TbReload/>
             </div>
            </div>
            <div className='shadow flex items-start'>
             <h3>Inquiries sent</h3>
             <div className='text-8xl text-gray-500 p-4 flex justify-center'>
             <TbReload/>
             </div>
            </div>
          </div>  
          
        </div>
    );
};

export default ThardPard;