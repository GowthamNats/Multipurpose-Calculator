import React from 'react';
import './LinearEquation.css';
import * as math from 'mathjs';

const LinearEquation = () => {

    let singleX = React.createRef();
    let singleC = React.createRef();
    let singleAnswer = React.createRef();

    let x1 = React.createRef();
    let y1 = React.createRef();
    let c1 = React.createRef();
    let x2 = React.createRef();
    let y2 = React.createRef();
    let c2 = React.createRef();
    let doubleX = React.createRef();
    let doubleY = React.createRef();

    let x13 = React.createRef();
    let y13 = React.createRef();
    let z13 = React.createRef();
    let c13 = React.createRef();
    let x23 = React.createRef();
    let y23 = React.createRef();
    let z23 = React.createRef();
    let c23 = React.createRef();
    let x33 = React.createRef();
    let y33 = React.createRef();
    let z33 = React.createRef();
    let c33 = React.createRef();
    let tripleX = React.createRef();
    let tripleY = React.createRef();
    let tripleZ = React.createRef();

    const singleVar = () => {
        singleAnswer.current.value = (singleC.current.value/singleX.current.value).toFixed(4);
    }

    const doubleVar = () => {
        if ((-x1.current.value/y1.current.value) === (-x2.current.value/y2.current.value) && (c1.current.value/y1.current.value) !== (c2.current.value/y2.current.value))  {
            doubleX.current.value = "No Solution";
            doubleY.current.value = "No Solution";
        }
        else if ((-x1.current.value/y1.current.value) === (-x2.current.value/y2.current.value) && (c1.current.value/y1.current.value) === (c2.current.value/y2.current.value)) {
            doubleX.current.value = "Infinite Solutions";
            doubleY.current.value = "Infinite Solutions";
        }
        else {
            const a = [[x1.current.value, y1.current.value], [x2.current.value, y2.current.value]];
            const b = [c1.current.value, c2.current.value]

            const x = math.usolve(a, b);
            doubleX.current.value = (x[0][0]).toFixed(3);
            doubleY.current.value = (x[1][0]).toFixed(3);
        }   
    }

    const tripleVar = () => {
        const a = [[x13.current.value, y13.current.value, z13.current.value], [x23.current.value, y23.current.value, z23.current.value], [x33.current.value, y33.current.value, z33.current.value]];
        const b = [c13.current.value, c23.current.value, c33.current.value]

        const x = math.usolve(a, b);
        tripleX.current.value = (x[0][0]).toFixed(3);
        tripleY.current.value = (x[1][0]).toFixed(3);
        tripleZ.current.value = (x[2][0]).toFixed(3);
    }

    return (
        <div>
            <div class="row g-0">
                <div class="col-12 equations single row g-0 justify-content-center">
                    <h1>SINGLE VARIABLE</h1>
                    <div class="col-8 row g-0 justify-content-center">
                        <div class="col-12 row g-0 justify-content-center">
                            <input  ref={singleX} type="number" class="form-control col-5" id="xCoeff1" placeholder="Coefficient of x" />
                            <span class="col-1">x = </span> 
                            <input  ref={singleC} type="number" class="form-control col-5" id="const1" placeholder="Constant"/>
                        </div>
                        <div class="col-5 offset-4">
                            <button class="btn btn-primary" onClick={singleVar}>Solve</button>
                        </div>
                    </div>
                    <div class="col-4 row g-0 justify-content-center">
                        <div class="col-12 row g-0 justify-content-center">
                            <span class="col-2">x = </span>
                            <input ref={singleAnswer} type="number" class="form-control col-4" id="solution1" placeholder="Solution" disabled />
                        </div>
                    </div>
                </div>
                <div class="col-6 equations double">
                    <h1>DOUBLE VARIABLE</h1>
                    <div class="row g-0 justify-content-center fields">
                        <input ref={x1} type="number" class="form-control d2 col-5" id="xCoeff2" placeholder="x1" />
                        <span class="col-1 variables">x + </span> 
                        <input ref={y1} type="number" class="form-control d2 col-5" id="xCoeff1" placeholder="y1" />
                        <span class="col-1 variables">y = </span> 
                        <input ref={c1} type="number" class="form-control d2 col-5" id="const1" placeholder="c1"/>
                    </div>
                    <div class="row g-0 justify-content-center fields">
                        <input ref={x2} type="number" class="form-control d2 col-5" id="xCoeff2" placeholder="x2" />
                        <span class="col-1 variables">x + </span> 
                        <input ref={y2} type="number" class="form-control d2 col-5" id="xCoeff1" placeholder="y2" />
                        <span class="col-1 variables">y = </span> 
                        <input ref={c2} type="number" class="form-control d2 col-5" id="const1" placeholder="c2"/>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-primary" onClick={doubleVar}>Solve</button>
                    </div>
                    <div class="col-8 offset-2 row g-0 justify-content-center">
                        <span class="col-2">x = </span>
                        <input ref={doubleX} type="text" class="form-control d2a col-4" id="solution1" placeholder="Solution" disabled />
                    </div>
                    <div class="col-8 offset-2 row g-0 justify-content-center">
                        <span class="col-2">y = </span>
                        <input ref={doubleY} type="text" class="form-control d2a col-4" id="solution2" placeholder="Solution" disabled />
                    </div>
                </div>
                <div class="col-6 equations triple">
                    <h1>TRIPLE VARIABLE</h1>
                    <div class="row g-0 justify-content-center fields">
                        <input ref={x13} type="number" class="form-control d2 col-5" id="xCoeff2" placeholder="x1" />
                        <span class="col-1 variables">x + </span> 
                        <input ref={y13} type="number" class="form-control d2 col-5" id="xCoeff1" placeholder="y1" />
                        <span class="col-1 variables">y + </span> 
                        <input ref={z13} type="number" class="form-control d2 col-5" id="xCoeff1" placeholder="z1" />
                        <span class="col-1 variables">z = </span> 
                        <input ref={c13} type="number" class="form-control d2 col-5" id="const1" placeholder="c1"/>
                    </div>
                    <div class="row g-0 justify-content-center fields">
                        <input ref={x23} type="number" class="form-control d2 col-5" id="xCoeff2" placeholder="x2" />
                        <span class="col-1 variables">x + </span> 
                        <input ref={y23} type="number" class="form-control d2 col-5" id="xCoeff1" placeholder="y2" />
                        <span class="col-1 variables">y + </span> 
                        <input ref={z23} type="number" class="form-control d2 col-5" id="xCoeff1" placeholder="z2" />
                        <span class="col-1 variables">z = </span> 
                        <input ref={c23} type="number" class="form-control d2 col-5" id="const1" placeholder="c2"/>
                    </div>
                    <div class="row g-0 justify-content-center fields">
                        <input ref={x33} type="number" class="form-control d2 col-5" id="xCoeff2" placeholder="x3" />
                        <span class="col-1 variables">x + </span> 
                        <input ref={y33} type="number" class="form-control d2 col-5" id="xCoeff1" placeholder="y3" />
                        <span class="col-1 variables">y + </span> 
                        <input ref={z33} type="number" class="form-control d2 col-5" id="xCoeff1" placeholder="z3" />
                        <span class="col-1 variables">z = </span> 
                        <input ref={c33} type="number" class="form-control d2 col-5" id="const1" placeholder="c3"/>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-primary" onClick={tripleVar}>Solve</button>
                    </div>
                    <div class="col-8 offset-2 row g-0 justify-content-center">
                        <span class="col-2">x = </span>
                        <input ref={tripleX} type="text" class="form-control d2a col-4" id="solution1" placeholder="Solution" disabled />
                    </div>
                    <div class="col-8 offset-2 row g-0 justify-content-center">
                        <span class="col-2">y = </span>
                        <input ref={tripleY} type="text" class="form-control d2a col-4" id="solution2" placeholder="Solution" disabled />
                    </div>
                    <div class="col-8 offset-2 row g-0 justify-content-center">
                        <span class="col-2">y = </span>
                        <input ref={tripleZ} type="text" class="form-control d2a col-4" id="solution2" placeholder="Solution" disabled />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinearEquation;
