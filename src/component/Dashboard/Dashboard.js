import React from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { BiWifi } from 'react-icons/bi';
import { BiMessageMinus } from 'react-icons/bi';
import { RiAlarmWarningLine} from 'react-icons/ri';

const Dashboard = () => {
    return (
        <div className='m-5'>
            <h1 className='flex items-start text-xl text-blue-800 mt-3'>Dashboard</h1>
            <div class="grid md:grid-cols-4 grid-cols-1 gap-4 mt-5 rounded">
                <div className='shadow flex flex-col p-5 items-start'>
                <div className='text-3xl bg-sky-400 text-white p-4 rounded-full'>
                <BsPersonFill />
                </div>
                    0
                    <h4>my leads</h4>
                </div>
                <div className='shadow flex flex-col p-5 items-start'>
                    <div className='text-3xl bg-red-500 text-white p-4 rounded-full'>
                       <BiWifi/>
                    </div>
                    0
                    <h4>my leads</h4>
                </div>
                <div className='shadow flex flex-col p-5 items-start'>
                    <div className='text-3xl bg-gray-200 text-green-600 p-4 rounded-full'>
                    <BiMessageMinus/>
                    </div>
                    0
                   <h4>my leads</h4>
                </div>
                <div className='shadow flex flex-col p-5 items-start'>
                     <div className='text-3xl bg-orange-200 text-orange-300 p-4 rounded-full'>
                    <RiAlarmWarningLine/>
                     </div>
                    0
                    <h4>my leads</h4>
                </div>
            </div>
            
        </div>
    );
};

export default Dashboard;