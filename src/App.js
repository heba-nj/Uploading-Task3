
import "./App.css";
import CompVideo from "./Components/videoss/CompVideo";
import CompImage from "./Components/imagess/CompImage";
import CompSound from "./Components/soundss/CompSound";
import Comp from "./Components/Comp";

function App() {
  return (
    <div className="">
      <div className="flex justify-center items-center pt-9">
        <CompVideo />
      </div>
      <div className="flex justify-center items-center pt-9">
        <CompImage />
      </div>
      <div className="flex justify-center items-center pt-9">
        <CompSound />
      </div>
      <div className="flex justify-center items-center pt-9">
        <Comp />
      </div>
    </div>
  )
}

export default App;
