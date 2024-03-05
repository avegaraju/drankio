import { GoogleLogin } from "@react-oauth/google";

function Login() {
  const handleSuccess = (credentialsResponse) => {
    console.log(credentialsResponse);
  };

  const handleError = () => {
    console.log("login failed");
  };
  return (
    <div>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </div>
  );
}
export default Login;
