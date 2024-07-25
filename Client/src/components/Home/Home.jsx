import UpcomingEvent from "./UpcomingEvent";
import UsedTechStack from "./UsedTechStack";
import FunnyCodeComponent from "./FunnyCodeComponent";
import { Separator } from "../ui/separator";

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
              into reality.
              <br /> Remember, the possibilities are limitless when you code
              with passion and persistence."
            </p>
          </section>

          <div className="my-8 mx-auto w-full max-w-6xl bg-background rounded-lg overflow-hidden shadow-lg">
            <img
              src="/src/components/Home/statsdark.png"
              alt="Cover Image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex flex-col justify-center sm:w-2/3 md:w-1/2 lg:w-2/5 items-center bg-primary-foreground rounded-lg shadow-lg p-6 space-y-3">
              <h2 className="text-2xl font-semibold mb-1">
                Why do you think coding is boring?
              </h2>
              <Separator orientation="vertical" />
              <p className="text-lg">
                Coding challenges your creativity and problem-solving skills,
                offering endless opportunities for innovation.
              </p>
              <p className="text-lg">
                With coding, you can create solutions that impact millions of
                lives, from apps to systems that power businesses globally.
              </p>
            </div>
            <FunnyCodeComponent />
          </div>

          <div className="text-center font-semibold my-6 text-3xl sm:text-5xl">Features</div>
          <div className="w-full mx-auto space-y-10 flex flex-col items-center justify-center px-4">
            <div className="flex flex-col sm:flex-row space-y- md:space-x-4">

              <div className="flex flex-col items-center justify-evenly bg-primary-foreground rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <img
                  src="/src/components/Home/logindark.png"
                  alt="Login"
                  className="w-full h-80 object-contain"
                />
                <p className="text-lg text-center">
                  Access your account to track your progress and get
                  personalized recommendations.
                </p>
              </div>

              <div className="flex flex-col items-center justify-evenly bg-primary-foreground rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center">Signup</h2>
                <img
                  src="/src/components/Home/signupdark.png"
                  alt="Signup"
                  className="w-full h-80 object-contain"
                />
                <p className="text-lg text-center">
                  Create an account to start your journey with us and unlock all
                  features.
                </p>
              </div>
            </div>

            {/* Second row with Add Students */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative flex-1 flex flex-col items-center bg-background rounded-lg shadow-lg overflow-hidden">
                <h2 className="absolute top-4 right-4 text-3xl font-bold text-ground shadow-lg z-10">
                  Add Students to Track
                </h2>
                <img
                  src="/src/components/Home/datadark.png"
                  alt="Add Students"
                  className="w-full h-80 object-contain"
                />
                <p className="p-4 text-lg text-center text-ground fancy-text">
                  Easily add students to your account and keep track of their
                  progress.
                </p>
              </div>
            </div>

            {/* Full-width image section */}
            <div className="flex flex-col items-center bg-background rounded-lg shadow-lg overflow-hidden">
              <h2 className="text-3xl font-bold text-ground mb-4">Dashboard</h2>
              <img
                src="/src/components/Home/statsdark.png"
                alt="Dashboard"
                className="w-full h-80 object-contain"
                style={{ paddingTop: "1rem" }}
              />
              <p className="p-4 text-lg text-center text-ground fancy-text">
                View all your stats and track your progress in the dashboard.
              </p>
            </div>
          </div>
          <UpcomingEvent />
          <UsedTechStack />
        </main>
      </div>
    </div>
  );
};

export default Home;
