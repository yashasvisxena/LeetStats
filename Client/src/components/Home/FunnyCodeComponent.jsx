import { useEffect, useState } from "react";

const FunnyCodeComponent = () => {
  const [randomCode, setRandomCode] = useState("");

  // List of random code snippets
  const codeSnippets = [
    `while (alive) {
    eat();
    sleep();
    code();
    repeat();
  }`,
    `if (success == true) {
    celebrate();
  } else {
    tryagain();
    be_awesome();
  }`,
    `function logic() {
    if (happy)
      code();
    else
      logic();
  }`
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * codeSnippets.length);
      setRandomCode(codeSnippets[randomIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="funnyCode"
      className="flex justify-center w-full p-4 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 min-h-40"
    >
      <pre className="w-full flex text-lg justify-center items-center bg-primary-foreground p-4 rounded-lg shadow-xl">
        <code className="whitespace-pre-wrap">{randomCode}</code>
      </pre>
    </div>
  );
};

export default FunnyCodeComponent;
