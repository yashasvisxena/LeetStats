import UpcomingEvent from "./UpcomingEvent";
import UsedTechStack from "./UsedTechStack";
import FunnyCodeComponent from "./FunnyCodeComponent";

const Home = () => {
  return (
   
    <div className="relative min-h-screen w-full bg-home-bg bg-cover bg-center">
    <div className="flex flex-col h-full mx-auto w-full bg-center">
      <main className="flex-grow p-4">
        <section className="my-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Track Your LeetCode Progress
          </h2>
          <p className="text-lg">
            Stay on top of your coding practice and logic building with our
            intuitive tracker.
          </p>
          <br />
          <p className="text-lg">
            "Every great accomplishment starts with a single line of code.
            Embrace the challenge, push boundaries, and transform your ideas
            into reality.<br /> Remember, the possibilities are limitless when you
            code with passion and persistence."
          </p>
        </section>
  
        <div className="my-8 mx-auto w-full max-w-6xl p-4 bg-background rounded-lg overflow-hidden shadow-lg">
          <img
            src="/src/components/Home/statsdark.png"
            alt="Cover Image"
            className="w-full h-full object-cover"
          />
        </div>
  
        <div className="flex justify-center bg-background items-center h-screen">
          <div className="w-96 rounded-lg shadow-lg p-6 flex">
           
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">Why do you think coding is boring?</h2>
            </div>
  
        
            <div className="flex-1">
              <p className="text-ground">
                Coding challenges your creativity and problem-solving skills, offering endless opportunities for innovation.
              </p>
              <p className="text-ground">
                With coding, you can create solutions that impact millions of lives, from apps to systems that power businesses globally.
              </p>
            </div>
          </div>
        </div>
  
        <div className="min-h-screen flex flex-col items-center justify-center bg-background p-8 space-y-12">
          <div className="w-full max-w-5xl flex flex-col space-y-12">
            {/* First row with Login and Signup */}
            <div className="w-full flex space-x-4">
              {/* Login */}
              <div className="relative flex-1 flex-col items-center bg-background rounded-lg shadow-lg overflow-hidden">
                <h2 className="absolute top-4 left-4 text-3xl font-bold text-ground shadow-lg z-10">
                  Login
                </h2>
                <img
                  src="/src/components/Home/logindark.png"
                  alt="Login"
                  className="w-full h-80 object-cover"
                />
                <p className="p-4 text-ground text-center fancy-text">
                  Access your account to track your progress and get personalized recommendations.
                </p>
              </div>
  
              {/* Signup */}
              <div className="relative flex-1 flex-col items-center bg-background rounded-lg shadow-lg overflow-hidden">
                <h2 className="absolute top-4 left-4 text-3xl font-bold text-ground shadow-lg z-10">
                  Signup
                </h2>
                <img
                  src="/src/components/Home/signupdark.png"
                  alt="Signup"
                  className="w-full h-80 object-cover"
                />
                <p className="p-4 text-lg text-center text-ground fancy-text">
                  Create an account to start your journey with us and unlock all features.
                </p>
              </div>
            </div>
  
            {/* Second row with Add Students */}
            <div className="w-full flex justify-end space-x-4">
              <div className="relative flex-1 flex-col items-center bg-background rounded-lg shadow-lg overflow-hidden">
                <h2 className="absolute top-4 right-4 text-3xl font-bold text-ground shadow-lg z-10">
                  Add Students to Track
                </h2>
                <img
                  src="/src/components/Home/datadark.png"
                  alt="Add Students"
                  className="w-full h-80 object-cover"
                />
                <p className="p-4 text-lg text-center text-ground fancy-text">
                  Easily add students to your account and keep track of their progress.
                </p>
              </div>
            </div>
  
            {/* Full-width image section */}
            <div className="w-full flex flex-col items-center bg-background rounded-lg shadow-lg overflow-hidden">
              <h2 className="text-3xl font-bold text-ground mb-4">
                Dashboard
              </h2>
              <img
                src="/src/components/Home/statsdark.png"
                alt="Dashboard"
                className="w-full h-80 object-cover"
                style={{ paddingTop: '1rem' }}
              />
              <p className="p-4 text-lg text-center text-ground fancy-text">
                View all your stats and track your progress in the dashboard.
              </p>
            </div>
          </div>
        </div>
  
        <FunnyCodeComponent />
        <UpcomingEvent />
        <UsedTechStack />
      </main>
    </div>
  </div>
  
  );
};

export default Home;