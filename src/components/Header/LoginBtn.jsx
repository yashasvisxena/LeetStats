
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const LoginBtn = () => {
  return (
    <Link to="/login">
      <Button className="p-1 text-xs sm:text-sm">Login / Signup</Button>
    </Link>
  );
};

export default LoginBtn;
