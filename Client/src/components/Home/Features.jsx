import React from 'react'

const Features = () => {
  return (
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
                  Access your account to track your students progress.
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
  )
}

export default Features