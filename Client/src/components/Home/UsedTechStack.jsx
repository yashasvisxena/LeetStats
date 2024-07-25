// src/components/UsedTechStack.js
import React from 'react';

const techStack = [
  { name: 'React', logo: 'src/components/Home/reactd.png' },
  { name: 'Redux', logo: 'src/components/Home/redux.png' },
  { name: 'Appwrite', logo: 'src/components/Home/appwrite.png' },
  { name: 'GraphQL', logo: 'src/components/Home/graphQl.jpg' },
  { name: 'Apollo', logo: 'src/components/Home/apollo.png' },
  { name: 'Express', logo: 'src/components/Home/expressjs.png' },
  { name: 'Tailwind CSS', logo: 'src/components/Home/tailwind.png' },
  { name: 'Shadcn', logo: 'src/components/Home/139895814.png' },
];

const UsedTechStack = () => {
  return (
    <div className=" bg-background flex flex-wrap justify-center p-6 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      <h2 className=" text-ground w-full text-3xl font-bold mb-4 text-center">Used Tech Stack</h2>
      {techStack.map((tech, index) => (
        <div key={index} className=" flex flex-col items-center m-4 transform transition-transform duration-300 hover:scale-110">
          <img src={tech.logo} alt={tech.name} className="h-16 w-16 mb-2" />
          <span className="text-lg font-medium">{tech.name}</span>
        </div>
      ))}
    </div>
  );
}

export default UsedTechStack;
