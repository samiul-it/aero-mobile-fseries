import Home from "./components/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <div>
      <Home></Home>
    </div>
  );
}

export default App;
