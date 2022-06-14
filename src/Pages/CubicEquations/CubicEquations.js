import React, {useState} from 'react';
import './CubicEquations.css'

const CubicEquations = () => {

    let coeffx3 = React.createRef();
    let coeffx2 = React.createRef();
    let coeffx = React.createRef();
    let coeffc = React.createRef();
    let det = React.createRef();
    let soln = React.createRef();
    let root1 = React.createRef();
    let root2 = React.createRef();
    let root3 = React.createRef();

    const computeEquation = () => {
        var a = coeffx2.current.value/coeffx3.current.value;
        var b = coeffx.current.value/coeffx3.current.value;
        var c = coeffc.current.value/coeffx3.current.value;

        var p = b - (Math.pow(a, 2))/3;
        var q = (2*(Math.pow(a, 3))/27) - (a*b/3) + c;
        var x = (Math.pow(q, 2))/4 + (Math.pow(p, 3))/27;
        det.current.value = (x).toFixed(3);
 
        if (x > 0) {
            soln.current.value = 1;
            root1.current.value = (Math.cbrt((-q/2) + (Math.sqrt(x))) + Math.cbrt((-q/2) - (Math.sqrt(x))) - (a/3)).toFixed(3);
            root2.current.value = "Nil";
            root3.current.value = "Nil";
        }
        else if (x < 0) {
            soln.current.value = 3;
            root1.current.value = ((2/Math.sqrt(3))*(Math.sqrt(-p))*Math.sin((1/3)*Math.asin((3*(Math.sqrt(3)*q))/(2*(Math.pow(Math.sqrt(-p), 3))))) - (a/3)).toFixed(3);
            root2.current.value = ((2/Math.sqrt(3))*(Math.sqrt(-p))*Math.sin(((1/3)*Math.asin((3*(Math.sqrt(3)*q))/(2*(Math.pow(Math.sqrt(-p), 3)))) + Math.PI/3)) - (a/3)).toFixed(3);
            root3.current.value = ((2/Math.sqrt(3))*(Math.sqrt(-p))*Math.cos(((1/3)*Math.asin((3*(Math.sqrt(3)*q))/(2*(Math.pow(Math.sqrt(-p), 3)))) + Math.PI/6)) - (a/3)).toFixed(3);
        }
        else if (x == 0) {
            soln.current.value = 3;
            root1.current.value = (-2*Math.cbrt(q/2) - (a/3)).toFixed(3);
            root2.current.value = (Math.cbrt(q/2) - (a/3)).toFixed(3);
            root3.current.value = (Math.cbrt(q/2) - (a/3)).toFixed(3);

        }
    }


    return (
        <div>
            <div class="cubic">
                <div class="row g-0">
                    <div class="col-12 text-center heading">
                        <h1>CUBIC EQUATION SOLVER</h1>
                    </div>
                    <div class="col-12 row g-0 justify-content-center">
                        <input ref={coeffx3} type="number" class="form-control col-5" id="xCoeff3" placeholder="Coefficient" />
                        <span class="col-1 variables">x<span class="square">3</span> + </span> 
                        <input ref={coeffx2} type="number" class="form-control col-5" id="xCoeff2" placeholder="Coefficient" />
                        <span class="col-1 variables">x<span class="square">2</span> + </span> 
                        <input ref={coeffx} type="number" class="form-control col-5" id="xCoeff1" placeholder="Coefficient" />
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
                            <input ref={det} type="number" class="form-control form2 col-4" id="determinant" placeholder="Discriminant" disabled />
                        </div>
                        <div class="row g-0 justify-content-center soln">
                            <span class="col text1">Real Solutions Possible = </span> 
                            <input ref={soln} type="number" class="form-control form2 col-4" id="solutions" placeholder="Distinct solutions" disabled />
                        </div>
                        <div class="row g-0 justify-content-center soln">
                            <span class="col text1">Root 1 = </span> 
                            <input ref={root1} type="text" class="form-control form2 col-4" id="solution1" placeholder="Root 1" disabled />
                        </div>
                        <div class="row g-0 justify-content-center soln">
                            <span class="col text1">Root 2 = </span> 
                            <input ref={root2} type="text" class="form-control form2 col-4" id="solution2" placeholder="Root 2" disabled />
                        </div>
                        <div class="row g-0 justify-content-center soln">
                            <span class="col text1">Root 3 = </span> 
                            <input ref={root3} type="text" class="form-control form2 col-4" id="solution2" placeholder="Root 3" disabled />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CubicEquations;
