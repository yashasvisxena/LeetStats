const UpcomingEvent = () => {
  return (
    <div className="bg-primary-foreground flex flex-col items-center justify-center p-6 w-full rounded-lg shadow-lg sm:w-1/2 mx-auto my-auto">
      <h2 className=" text-ground sm:text-3xl text-xl font-bold mb-4">
        Upcoming Features
      </h2>
      <div className=" text-lg sm:text-xl font-semibold mb-2">
        Google OAuth 2.0
      </div>
      <div>Will enable user to login through his/her Google Account</div>
    </div>
  );
};

export default UpcomingEvent;
