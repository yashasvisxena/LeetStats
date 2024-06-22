// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">LeetStas</h1>
        <nav>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">Login</button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2">Sign Up</button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">
        <section className="my-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Track Your LeetCode Progress</h2>
          <p className="text-lg">Stay on top of your coding practice and logic building with our intuitive tracker.</p>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-foreground p-6 rounded-lg shadow-lg">
            <img src="/path/to/feature1.jpg" alt="Feature 1" className="w-full h-40 object-cover rounded-lg mb-4"/>
            <h3 className="text-2xl text-background font-bold mb-2">Track Your Stats</h3>
            <p className="text-0.5xl text-background">See your progress over time with detailed statistics.</p>
          </div>
          <div className="bg-secondary-foreground p-6 rounded-lg shadow-lg">
            <img src="/path/to/feature2.jpg" alt="Feature 2" className="w-full h-40 object-cover rounded-lg mb-4"/>
            <h3 className="text-2xl text-background font-bold mb-2">Analyze Patterns</h3>
            <p className="text-0.5xl text-background">Identify strengths and weaknesses in your coding skills.</p>
          </div>
          <div className="bg-foreground p-6 rounded-lg shadow-lg">
            <img src="/path/to/feature3.jpg" alt="Feature 3" className="w-full h-40 object-cover rounded-lg mb-4"/>
            <h3 className="text-2xl text-background font-bold mb-2">Improve Efficiency</h3>
            <p className="text-0.5xl text-background">Optimize your problem-solving approach for better results.</p>
          </div>
        </section>

        <section className="bg-foreground bg-center p-8 my-8 rounded-lg shadow-lg" style={{ backgroundImage: "url('/path/to/benefit1.jpg')" }}>
          <h3 className="text-3xl text-background font-bold ">Enhance Problem-Solving Skills</h3>
          <p className="text-white text-background">Coding enhances problem-solving skills by breaking down complex problems into manageable tasks. This fosters a systematic approach to debugging and optimizing code.</p>
        </section>

        <section className="bg-foreground bg-center p-8 my-8 rounded-lg shadow-lg" style={{ backgroundImage: "url('/path/to/benefit2.jpg')" }}>
          <h3 className="text-3xl text-background font-bold ">Boost Technical Proficiency</h3>
          <p className="text-white text-background">Consistent coding practice improves technical proficiency by solidifying understanding of algorithms, data structures, and design patterns, essential for efficient and scalable software development.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2024 LeetStats. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
