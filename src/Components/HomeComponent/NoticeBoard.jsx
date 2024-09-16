import React, {useState, useEffect} from 'react';
const notices = [
  {
    id: 1,
    title: 'Exam Schedule for Semester 2024',
    date: 'September 15, 2024',
    description: 'The final exam schedule for the semester is now available. Please check the university portal for details.',
  },
  {
    id: 2,
    title: 'New Library Hours',
    date: 'September 10, 2024',
    description: 'The library will now be open from 8 AM to 10 PM on weekdays and 9 AM to 5 PM on weekends.',
  },
];

import { useMediaQuery } from 'react-responsive';
const LargeNoticeBoard=()=>{

  return (
    <div className="flex box-shadow bg-[url('./assets/Home/ticket.svg')] bg-cover bg-center overflow-hidden rounded-lg p-4 lg:w-[75%] lg:h-96  mt-10 mb-10">
      <div className='w-96 ml-40 my-16 mb-16 oveflow-hidden'>
      <marquee  className='h-52' scrollamount="4" direction="up" onMouseOver={(e) => (e.target.stop())}
        onMouseOut={(e) => (e.target.start())}>
      <ul className="space-y-4 ">
        {notices.map((notice) => (          
          <li key={notice.id} className="border-b w-full pb-4">
            
            <h3 className="text-lg font-semibold text-blue-900">{notice.title}</h3>
            <p className="text-sm text-gray-500">{notice.date}</p>
            <p className="text-gray-700 mt-2">{notice.description}</p>
            
          </li>
        ))}
      </ul>
      </marquee>
      </div>
    </div>
  );

};

const SmallNoticeBoard=()=>{

  return (
    <div className=" box-shadow p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-amber-200 bg-blue-950 p-2 rounded-t-lg">
        Notifications
      </h2>
      <div className="mt-4 space-y-4">
        <marquee direction="up">
      <ul className="space-y-4 ">
        {notices.map((notice) => (          
          <li key={notice.id} className="border-b w-full pb-4">
            
            <h3 className="text-lg font-semibold text-blue-900">{notice.title}</h3>
            <p className="text-sm text-gray-600">{notice.date}</p>
            <p className="text-blue-950 mt-2">{notice.description}</p>
            
          </li>
        ))}
      </ul>
      </marquee>
      </div>
    </div>
  );

};

const Noticeboard = (props) => {
const isLargeScreen = useMediaQuery({ query: '(min-width: 1368px)' });

  return (
     <div className="flex items-center h-[75%] justify-center  w-[85%] rounded-md bg-opacity-60  my-10 pl-5 pb-10 pr-5">
      {isLargeScreen ? <LargeNoticeBoard /> : <SmallNoticeBoard />}
      </div>
  );


};

export default Noticeboard;
