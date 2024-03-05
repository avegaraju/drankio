import { GoogleLogin } from "@react-oauth/google";

function GoogleLoginButton() {
  const handleSuccess = (credentialsResponse) => {
    console.log(credentialsResponse);
  };

  const handleError = () => {
    console.log("login failed");
  };
  return (
    <div>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        theme="filled_blue"
        size="large"
        text="continue_with"
      />
      <br />
    </div>
  );
}

export default GoogleLoginButton;
