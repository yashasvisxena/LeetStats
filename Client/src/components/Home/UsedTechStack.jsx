// src/components/UsedTechStack.js
import React from 'react';

const techStack = [
  { name: 'React', logo: '/images/react-logo.png' },
  { name: 'Redux', logo: '/images/redux-logo.png' },
  { name: 'Appwrite', logo: '/images/appwrite-logo.png' },
  { name: 'GraphQL', logo: '/images/graphql-logo.png' },
  { name: 'Apollo', logo: '/images/apollo-logo.png' },
  { name: 'Express', logo: '/images/express-logo.png' },
  { name: 'Tailwind CSS', logo: '/images/tailwind-logo.png' },
  { name: 'Shadcn', logo: '/images/shadcn-logo.png' },
];

const UsedTechStack = () => {
  return (
    <div className="flex flex-wrap justify-center p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      <h2 className="w-full text-3xl font-bold mb-4 text-center">Used Tech Stack</h2>
      {techStack.map((tech, index) => (
        <div key={index} className="flex flex-col items-center m-4 transform transition-transform duration-300 hover:scale-110">
          <img src={tech.logo} alt={tech.name} className="h-16 w-16 mb-2" />
          <span className="text-lg font-medium">{tech.name}</span>
        </div>
      ))}
    </div>
  );
}

export default UsedTechStack;
