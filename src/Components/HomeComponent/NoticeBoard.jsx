import React from 'react';

const Noticeboard = () => {
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

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4 bg-blue-900 text-center text-white">Noticeboard</h2>
      <ul className="space-y-4">
        {notices.map((notice) => (
          <li key={notice.id} className="border-b pb-4">
            <h3 className="text-lg font-semibold text-blue-600">{notice.title}</h3>
            <p className="text-sm text-gray-500">{notice.date}</p>
            <p className="text-gray-700 mt-2">{notice.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Noticeboard;
