import Heading from "./components/Heading";
import Slogan from "./components/Slogan";
import Time from "./components/Time";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

let App = () => {
  return (
    <center className="container">
      <Heading></Heading>
      <Slogan></Slogan>
      <Time></Time>
    </center>
  );
}

export default App;
