import useTheme from "@/Contexts/Theme";
import datadark from "./Screenshots/datadark.png";
import datalight from "./Screenshots/datalight.png";
import logindark from "./Screenshots/logindark.png";
import signupdark from "./Screenshots/signupdark.png";
import loginlight from "./Screenshots/loginlight.png";
import signuplight from "./Screenshots/signuplight.png";
import statsdark from "./Screenshots/statsdark.png";
import statslight from "./Screenshots/statslight.png";
const Features = () => {
  const { themeMode } = useTheme();

  const feat = [
    {
      Title: "Signup",
      img: themeMode === "dark" ? signupdark : signuplight,
      desc: "Create an account to start your journey with us and unlock all features.",
    },
    {
      Title: "Login",
      img: themeMode === "dark" ? logindark : loginlight,
      desc: "Access your account to track your students progress.",
    },
    {
      Title: "Add Students to Track",
      img: themeMode === "dark" ? datadark : datalight,
      desc: "Easily add students to your account and keep track of their progress. Whether it is an excel file with Student's name and leetcode username in it Or you want to add it manually ."
    },
    {
      Title: "Dashboard",
      img: themeMode === "dark" ? statsdark : statslight,
      desc: "View your students progress and manage your account. Sort the data and Search . Download it in pdf file . Added Features like Dark/Light Mode and a refetch option to get the latest stats at a click of a button !",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {feat.map((item, index) => (
        <div
          key={index}
          className="rounded-lg shadow-sm shadow-foreground"
        >
          <img
            src={item.img}
            alt={item.Title}
            className="w-full object-contain"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{item.Title}</h3>
            <p className="">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
