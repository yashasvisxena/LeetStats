
import React from 'react';

const UpcomingEvent = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Upcoming Event</h2>
      <ul className="list-disc list-inside space-y-2">
        <li className="hover:transform hover:scale-105 transition-transform duration-300">Google Auth</li>
        <li className="hover:transform hover:scale-105 transition-transform duration-300">Delete Student</li>
        <li className="hover:transform hover:scale-105 transition-transform duration-300">Export Data to PDF</li>
      </ul>
    </div>
  );
}

export default UpcomingEvent;
