import { useParams } from "react-router-dom";
import RegisterScreen from "./components/login/RegisterScreen";

const Signup = () => {
  const { requestId } = useParams();

  return (
    <>
      <RegisterScreen type="signup" requestId={requestId} />;
    </>
  );
};

export default Signup;
