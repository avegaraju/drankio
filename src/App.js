import "../src/css/style.red.css";
import "../src/css/custom.css";
import "../src/css/fontastic.css";
import "../src/vendor/bootstrap/css/bootstrap.min.css";
import "../src/vendor/font-awesome/css/font-awesome.min.css";
import Header from "../src/components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
    </div>
  );
}

export default App;
