import React from 'react';
import './ComplexNumbers.css';

const ComplexNumbers = () => {

    let coeffx1 = React.createRef();
    let coeffy1 = React.createRef();
    let coeffx2 = React.createRef();
    let coeffy2 = React.createRef();

    let modA = React.createRef();
    let modB = React.createRef();
    let AplusB = React.createRef();
    let AminusB = React.createRef();
    let AcrossB = React.createRef();
    let AdivB = React.createRef();
    let Ainv = React.createRef();
    let Aarg = React.createRef();
    let Barg = React.createRef();

    const MODa = () => {
        modA.current.value = (Math.sqrt(Math.pow(coeffx1.current.value, 2) + Math.pow(coeffy1.current.value, 2))).toFixed(3);
    }

    const MODb = () => {
        modB.current.value = (Math.sqrt(Math.pow(coeffx2.current.value, 2) + Math.pow(coeffy2.current.value, 2))).toFixed(3);
    }

    const aPLUSb = () => {
        let x = coeffx1.current.value*1 + coeffx2.current.value*1;
        let y = coeffy1.current.value*1 + coeffy2.current.value*1;
        AplusB.current.value = `(${x.toFixed(3)}) + (${y.toFixed(3)})i`;
    }

    const aMINUSb = () => {
        let x = coeffx1.current.value*1 - coeffx2.current.value*1;
        let y = coeffy1.current.value*1 - coeffy2.current.value*1;
        AminusB.current.value = `(${x.toFixed(3)}) + (${y.toFixed(3)})i`;
    }

    const aCROSSb = () => {
        let x = (coeffx1.current.value*coeffx2.current.value) - (coeffy1.current.value*coeffy2.current.value);
        let y = (coeffx1.current.value*coeffy2.current.value) + (coeffy1.current.value*coeffx2.current.value);
        AcrossB.current.value = `(${x.toFixed(3)}) + (${y.toFixed(3)})i`;
    }

    const aDIVb = () => {
        let mag = Math.sqrt(Math.pow(coeffx2.current.value, 2) + Math.pow(coeffy2.current.value, 2));
        let x = ((coeffx1.current.value*coeffx2.current.value) + (coeffy1.current.value*coeffy2.current.value))/mag;
        let y = ((coeffx1.current.value*coeffy2.current.value) - (coeffy1.current.value*coeffx2.current.value))/mag;
        AdivB.current.value = `(${x.toFixed(3)}) + (${y.toFixed(3)})i`;
    }

    const aINV = () => {
        let mag = Math.sqrt(Math.pow(coeffx1.current.value, 2) + Math.pow(coeffy1.current.value, 2));
        let x = (coeffx1.current.value*1)/mag;
        let y = (-coeffy1.current.value*1)/mag; 
        Ainv.current.value = `(${x.toFixed(3)}) + (${y.toFixed(3)})i`;
    }

    const aARG = () => {
        Aarg.current.value = `${(Math.atan(coeffy1.current.value/coeffx1.current.value)).toFixed(3)} radians`;
    }

    const bARG = () => {
        Barg.current.value = `${(Math.atan(coeffy2.current.value/coeffx2.current.value)).toFixed(3)} radians`;
    }

    return (
        <div>
            <div class="row g-0 complex">
                <div class="heading">
                    <h1 class="display-4">COMPLEX NUMBER CALCULATOR</h1>
                </div>
                <div class="input-fields">
                    <div class="row g-0 justify-content-center inputs">
                        <span class="variables">A : </span> 
                        <input ref={coeffx1} type="number" class="form-control col" id="xCoeff1" placeholder="Real Coefficient" />
                        <span class="variables"> + </span> 
                        <input ref={coeffy1} type="number" class="form-control col" id="yCoeff1" placeholder="Imaginary Coefficient" />
                        <span class="variables">i</span> 
                    </div>
                    <div class="row g-0 justify-content-center inputs">
                        <span class="variables">B : </span> 
                        <input ref={coeffx2} type="number" class="form-control col" id="xCoeff2" placeholder="Real Coefficient" />
                        <span class="variables"> + </span> 
                        <input ref={coeffy2} type="number" class="form-control col" id="yCoeff2" placeholder="Imaginary Coefficient" />
                        <span class="variables">i</span> 
                    </div>
                </div>
                <div class="row g-0 solution-fields">
                    <div class="row g-0 solutions col-4">
                        <button class="btn btn-primary col" onClick={MODa}>| A |</button>
                        <input ref={modA} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-4">
                        <button class="btn btn-primary col" onClick={MODb}>| B |</button>
                        <input ref={modB} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-4">
                        <button class="btn btn-primary col" onClick={aPLUSb}>A + B</button>
                        <input ref={AplusB} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-4">
                        <button class="btn btn-primary col" onClick={aMINUSb}>A - B</button>
                        <input ref={AminusB} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-4">
                        <button class="btn btn-primary col" onClick={aCROSSb}>A * B</button>
                        <input ref={AcrossB} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-4">
                        <button class="btn btn-primary col" onClick={aDIVb}>A / B</button>
                        <input ref={AdivB} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-4">
                        <button class="btn btn-primary col" onClick={aINV}>inv(A)</button>
                        <input ref={Ainv} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-4">
                        <button class="btn btn-primary col" onClick={aARG}>arg(A)</button>
                        <input ref={Aarg} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-4">
                        <button class="btn btn-primary col"onClick={bARG}>arg(B)</button>
                        <input ref={Barg} type="text" class="form-control" id="solution" disabled/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComplexNumbers;
