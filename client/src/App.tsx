import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./configureStore";
import TinyUrlForm from "./components/TinyUrlForm";
import AdminLogin from "./components/AdminLogin";
import AdminPage from "./components/AdminPage";

const App: React.SFC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={TinyUrlForm} />
            <Route exact path="/login" component={AdminLogin} />
            <Route exact path="/admin" component={AdminPage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
