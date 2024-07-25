import React, { useEffect, useState } from 'react';

const FunnyCodeComponent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [randomCode, setRandomCode] = useState('');

  // List of random code snippets
  const codeSnippets = [
    `while (alive) {
      eat();
      sleep();
      code();
      repeat();
    }`,
    `if(success==true){
        celebrate();
    }
    else {
      tryagain();
      be_awesome();
    } 
}`,
    `
     function logic(){
     if(happy)
     code();
     else{
     logic()}
     }
}`,
    `for (let i = 0; i < 10; i++) {
  console.log('Counting:', i);
}`,
    `class Car {
  constructor(brand) {
    this.brand = brand;
  }

  present() {
    return \`I have a \${this.brand}\`;
  }
}`
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * codeSnippets.length);
      setRandomCode(codeSnippets[randomIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const funnyCodeDiv = document.getElementById("funnyCode");
      const rect = funnyCodeDiv.getBoundingClientRect();
      
      // Checking if the funnyCodeDiv is in the viewport
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setShowPopup(true);
      } else {
        setShowPopup(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="funnyCode" className="bg-background flex items-center p-4 border-none rounded-lg mb-4">
      <div className="w-1/2 text-center text-blue-500 text-lg font-bold">
        Hey folk, have a look!!
      </div>
      <pre className="w-1/2 bg-background p-4 rounded-lg shadow-lg overflow-x-auto">
        {randomCode}
      </pre>
      {showPopup && (
        <div className="fixed bottom-4 right-4 bg-ground border-none rounded-lg p-4 shadow-md">
          <img src="/src/components/Home/reactd.png" alt="Funny Image" className="w-24 h-24" />
        </div>
      )}
    </div>
  );
};

export default FunnyCodeComponent;
