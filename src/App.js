//  @Package
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//  @Own
import Navbar from "./components/Navbar";
import { ProductsListScreen } from "./components/ProductsListScreen";
import { DetailProductScreen } from "./components/DetailProductScreen";
import { Breadcrumbs } from "./components/Breadcrumbs/index";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Breadcrumbs />
          <div>
            <Switch>
              <Route exact path="/items" component={ProductsListScreen} />
              <Route
                exact
                path="/items/:productId"
                component={DetailProductScreen}
              />
              <Route exact path="/" component={() => "bienvenido"} />
              {/* <Route exact path="*" component={() => "bienvenido"} /> */}
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
