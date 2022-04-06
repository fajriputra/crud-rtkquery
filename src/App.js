import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Products from "./pages/Products";
import Detail from "./pages/Detail";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/product/detail/:id" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
