import react from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import styled from "styled-components";
import {
    Home,
    Products,
    SingleProduct,
    About,
    Error
} from './pages'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:id" children={<SingleProduct/>}/>
        <Route path="*">
          <Error/>
        </Route>
      </Switch>
    </Router>
  );
}




export default App