import React from "react";

import "./styles/App.scss";
import Navbar from "./components/elements/Navbar";
import Items from "./components/Items/Items";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddItem from "./components/Items/AddItem";
import EditItem from "./components/Items/EditItem";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Items} />
                <Route path="/items/add" component={AddItem} />
                <Route path="/items/edit/:id" component={EditItem} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
