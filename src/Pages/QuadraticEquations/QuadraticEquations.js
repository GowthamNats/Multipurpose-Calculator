import React, {useState} from 'react';
import './QuadraticEquations.css';

const QuadraticEquations = () => {

    let coeffx2 = React.createRef();
    let coeffx = React.createRef();
    let coeffc = React.createRef();
    let det = React.createRef();
    let soln = React.createRef();
    let root1 = React.createRef();
    let root2 = React.createRef();

    const computeEquation = () => {
        det.current.value = ((coeffx.current.value)*(coeffx.current.value)- (4*(coeffc.current.value)*(coeffx2.current.value))).toFixed(3);
        if (det.current.value < 0) {
            soln.current.value = 0;
            root1.current.value = "Nil";
            root2.current.value = "Nil";
        }
        else if (det.current.value > 0) {
            soln.current.value = 2;
            root1.current.value = (((-coeffx.current.value) - (Math.sqrt(det.current.value)))/(2*coeffx2.current.value)).toFixed(3);
            root2.current.value = (((-coeffx.current.value) + (Math.sqrt(det.current.value)))/(2*coeffx2.current.value)).toFixed(3);
        }
        else if (det.current.value == 0) {
            soln.current.value = 1;
            root1.current.value = (-coeffx.current.value/(2*coeffx2.current.value)).toFixed(3);
            root2.current.value = "Nil"
        }
    }

    return (
        <div class="quadratic">
            <div class="row g-0">
                <div class="col-12 text-center heading">
                    <h1>QUADRATIC EQUATION SOLVER</h1>
                </div>
                <div class="col-12 row g-0 justify-content-center">
                    <input ref={coeffx2} type="number" class="form-control col-5" id="xCoeff2" placeholder="Coefficient of x^2" />
                    <span class="col-1 variables">x<span class="square">2</span> + </span> 
                    <input ref={coeffx} type="number" class="form-control col-5" id="xCoeff1" placeholder="Coefficient of x" />
                    <span class="col-1 variables">x + </span> 
                    <input ref={coeffc} type="number" class="form-control col-5" id="const1" placeholder="Constant"/>
                    <span class="col-1 variables">= 0</span> 
                </div>
                <div class="col-12 text-center">
                    <button onClick={computeEquation} class="btn btn-primary btn-lg">Compute</button>
                </div>
                <div class="col-8 offset-2 g-0 justify-content-center">
                    <div class="row g-0 justify-content-center soln">
                        <span class="col text1">Discriminant = </span> 
                        <input ref={det} type="number" class="form-control col-4" id="determinant" placeholder="Discriminant" disabled />
                    </div>
                    <div class="row g-0 justify-content-center soln">
                        <span class="col text1">Distinct Solutions Possible = </span> 
                        <input ref={soln} type="number" class="form-control col-4" id="solutions" placeholder="Distinct solutions" disabled />
                    </div>
                    <div class="row g-0 justify-content-center soln">
                        <span class="col text1">Root 1 = </span> 
                        <input ref={root1} type="text" class="form-control col-4" id="solution1" placeholder="Root 1" disabled />
                    </div>
                    <div class="row g-0 justify-content-center soln">
                        <span class="col text1">Root 2 = </span> 
                        <input ref={root2} type="text" class="form-control col-4" id="solution2" placeholder="Root 2" disabled />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuadraticEquations;
