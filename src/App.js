import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Sidebar from './Components/Sidebar/Sidebar';

import Standard from './Pages/Standard/Standard';
import LinearEquation from './Pages/LinearEquation/LinearEquation';
import QuadraticEquations from './Pages/QuadraticEquations/QuadraticEquations';
import CubicEquations from './Pages/CubicEquations/CubicEquations';
import Trigonometry from './Pages/Trigonometry/Trigonometry';
import Statistics from './Pages/Statistics/Statistics';
import ComplexNumbers from './Pages/ComplexNumbers/ComplexNumbers';
import Matrices from './Pages/Matrices/Matrices';
import Vectors from './Pages/Vectors/Vectors';
import Mensuration from './Pages/Mensuration/Mensuration';
import NumberTheory from './Pages/NumberTheory/NumberTheory';
import Progressions from './Pages/Progressions/Progressions';

const App = () => {
  return (
    <div className="row g-0">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col">
        <BrowserRouter>
          <Switch>
            <Route path="/linear">
              <LinearEquation />
            </Route>
            <Route path="/quadratic">
              <QuadraticEquations />
            </Route>
            <Route path="/cubic">
              <CubicEquations />
            </Route>
            <Route path="/trigonometry">
              <Trigonometry />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="/complex">
              <ComplexNumbers />
            </Route>
            <Route path="/matrix">
              <Matrices />
            </Route>
            <Route path="/vector">
              <Vectors />
            </Route>
            <Route path="/mensuration">
              <Mensuration />
            </Route>
            <Route path="/numbertheory">
              <NumberTheory />
            </Route>
            <Route path="/progressions">
              <Progressions />
            </Route>
            <Route path="/">
              <Standard />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App;