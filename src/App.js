import "./App.css";
import Display from "./components/Display";
// import Loader from "./components/Loader/Loader";
import UploadImg from "./components/UploadImg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Display />
          </Route>
          <Route path="/upload">
            <UploadImg />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
