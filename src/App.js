import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route to="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
