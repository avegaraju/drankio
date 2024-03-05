import "../src/css/style.red.css";
import "../src/css/custom.css";
import "../src/css/fontastic.css";
import "../src/vendor/bootstrap/css/bootstrap.min.css";
import "../src/vendor/font-awesome/css/font-awesome.min.css";
import Header from "../src/components/Header";
import Main from "./components/Main";
import Login from "./components/Auth/Login";
import { Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Feed from "./components/Feed";
import Register from "./components/Auth/Register";

function App() {
  return (
    <GoogleOAuthProvider clientId="467788471028-bad2dleh0qug0qtn9v895ued7vg91hgv.apps.googleusercontent.com">
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
