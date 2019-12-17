import React from 'react';
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Informacion from '../Pages/Informacion';
import Principal from '../Pages/Principal'

function App() {
    return(
        <BrowserRouter>
      <Switch>
            <Route exact path="/informacion" component={Informacion} />
            <Route exact path="/principal" component={Principal} />
      </Switch>
      </BrowserRouter>
    );
}
export default App;