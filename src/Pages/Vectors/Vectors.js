import React from 'react';
import './Vectors.css';

const Vectors = () => {

    let coeffx1 = React.createRef();
    let coeffy1 = React.createRef();
    let coeffz1 = React.createRef();
    let coeffx2 = React.createRef();
    let coeffy2 = React.createRef();
    let coeffz2 = React.createRef();

    let modA = React.createRef();
    let modB = React.createRef();
    let AplusB = React.createRef();
    let AminusB = React.createRef();
    let AcrossB = React.createRef();
    let AdotB = React.createRef();
    let BcrossA = React.createRef();
    let AalongB = React.createRef();
    let ArightB = React.createRef();
    let arg = React.createRef();

    const MODa = () => {
        modA.current.value = (Math.sqrt(Math.pow(coeffx1.current.value, 2) + Math.pow(coeffy1.current.value, 2) + Math.pow(coeffz1.current.value, 2))).toFixed(3);
    }

    const MODb = () => {
        modB.current.value = (Math.sqrt(Math.pow(coeffx2.current.value, 2) + Math.pow(coeffy2.current.value, 2) + Math.pow(coeffz2.current.value, 2))).toFixed(3);
    }

    const aPLUSb = () => {
        let x = coeffx1.current.value*1 + coeffx2.current.value*1;
        let y = coeffy1.current.value*1 + coeffy2.current.value*1;
        let z = coeffz1.current.value*1 + coeffz2.current.value*1;
        AplusB.current.value = `(${x.toFixed(3)})i + (${y.toFixed(3)})j + (${z.toFixed(3)})k`;
    }

    const aMINUSb = () => {
        let x = coeffx1.current.value*1 - coeffx2.current.value*1;
        let y = coeffy1.current.value*1 - coeffy2.current.value*1;
        let z = coeffz1.current.value*1 - coeffz2.current.value*1;
        AminusB.current.value = `(${x.toFixed(3)})i + (${y.toFixed(3)})j + (${z.toFixed(3)})k`;
    }

    const aDOTb = () => {
        let x = coeffx1.current.value*coeffx2.current.value;
        let y = coeffy1.current.value*coeffy2.current.value;
        let z = coeffz1.current.value*coeffz2.current.value;
        AdotB.current.value = `(${(x+y+z).toFixed(3)})`;
    }

    const aCROSSb = () => {
        let x = coeffy1.current.value*coeffz2.current.value - coeffy2.current.value*coeffz1.current.value;
        let y = coeffz1.current.value*coeffx2.current.value - coeffx1.current.value*coeffz2.current.value;
        let z = coeffx1.current.value*coeffy2.current.value - coeffx2.current.value*coeffy1.current.value;
        AcrossB.current.value = `(${x.toFixed(3)})i + (${y.toFixed(3)})j + (${z.toFixed(3)})k`;
    }

    const bCROSSa = () => {
        let x = - coeffy1.current.value*coeffz2.current.value + coeffy2.current.value*coeffz1.current.value;
        let y = - coeffz1.current.value*coeffx2.current.value + coeffx1.current.value*coeffz2.current.value;
        let z = - coeffx1.current.value*coeffy2.current.value + coeffx2.current.value*coeffy1.current.value;
        BcrossA.current.value = `(${x.toFixed(3)})i + (${y.toFixed(3)})j + (${z.toFixed(3)})k`;
    }

    const aALONGb = () => {
        let dot = (coeffx1.current.value*coeffx2.current.value)+(coeffy1.current.value*coeffy2.current.value)+(coeffz1.current.value*coeffz2.current.value);
        let b = Math.pow(coeffx2.current.value, 2) + Math.pow(coeffy2.current.value, 2) + Math.pow(coeffz2.current.value, 2);
        dot = dot/b;
        let x = coeffx2.current.value*dot;
        let y = coeffy2.current.value*dot;
        let z = coeffz2.current.value*dot;
        AalongB.current.value = `(${x.toFixed(3)})i + (${y.toFixed(3)})j + (${z.toFixed(3)})k`;
    }

    const aRIGHTb = () => {
        let a = Math.sqrt(Math.pow(coeffx1.current.value, 2) + Math.pow(coeffy1.current.value, 2) + Math.pow(coeffz1.current.value, 2));
        let b = Math.sqrt(Math.pow(coeffx2.current.value, 2) + Math.pow(coeffy2.current.value, 2) + Math.pow(coeffz2.current.value, 2));
        let coeff = (a/Math.pow(b, 2))*(Math.sin(Math.acos((coeffx1.current.value*coeffx2.current.value + coeffy1.current.value*coeffy2.current.value + coeffz1.current.value*coeffz2.current.value)/(a*b))));
        let x = coeffx2.current.value*coeff;
        let y = coeffy2.current.value*coeff;
        let z = coeffz2.current.value*coeff;
        ArightB.current.value = `(${x.toFixed(3)})i + (${y.toFixed(3)})j + (${z.toFixed(3)})k`;
    }

    const ARG = () => {
        let a = Math.sqrt(Math.pow(coeffx1.current.value, 2) + Math.pow(coeffy1.current.value, 2) + Math.pow(coeffz1.current.value, 2));
        let b = Math.sqrt(Math.pow(coeffx2.current.value, 2) + Math.pow(coeffy2.current.value, 2) + Math.pow(coeffz2.current.value, 2));
        let x = (coeffx1.current.value*coeffx2.current.value)/(a*b);
        let y = (coeffy1.current.value*coeffy2.current.value)/(a*b);
        let z = (coeffz1.current.value*coeffz2.current.value)/(a*b);
        arg.current.value = `(${(Math.acos(x+y+z)).toFixed(3)}) radians`;
    }

    return (
        <div>
            <div class="row g-0 vectors">
                <div class="heading">
                    <h1 class="display-4">VECTORS CALCULATOR</h1>
                </div>
                <div class="input-fields">
                    <div class="row g-0 justify-content-center inputs">
                        <span class="variables">A : </span> 
                        <input ref={coeffx1} type="number" class="form-control col" id="xCoeff1" placeholder="x component" />
                        <span class="variables"> i + </span> 
                        <input ref={coeffy1} type="number" class="form-control col" id="yCoeff1" placeholder="y component" />
                        <span class="variables"> j + </span> 
                        <input ref={coeffz1} type="number" class="form-control col" id="yCoeff1" placeholder="z component" />
                        <span class="variables">k</span> 
                    </div>
                    <div class="row g-0 justify-content-center inputs">
                        <span class="variables">B : </span> 
                        <input ref={coeffx2} type="number" class="form-control col" id="xCoeff1" placeholder="x component" />
                        <span class="variables"> i + </span> 
                        <input ref={coeffy2} type="number" class="form-control col" id="yCoeff1" placeholder="y component" />
                        <span class="variables"> j + </span> 
                        <input ref={coeffz2} type="number" class="form-control col" id="yCoeff1" placeholder="z component" />
                        <span class="variables">k</span> 
                    </div>
                </div>
                <div class="row g-0 solution-fields">
                    <div class="row g-0 solutions col-6">
                        <button class="btn btn-primary col" onClick={MODa}>| A |</button>
                        <input ref={modA} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-6">
                        <button class="btn btn-primary col" onClick={MODb}>| B |</button>
                        <input ref={modB} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-6">
                        <button class="btn btn-primary col" onClick={aPLUSb}>A + B</button>
                        <input ref={AplusB} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-6">
                        <button class="btn btn-primary col" onClick={aMINUSb}>A - B</button>
                        <input ref={AminusB} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-6">
                        <button class="btn btn-primary col" onClick={aDOTb}>A . B</button>
                        <input ref={AdotB} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-6">
                        <button class="btn btn-primary col" onClick={aCROSSb}>A x B</button>
                        <input ref={AcrossB} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-6">
                        <button class="btn btn-primary col" onClick={bCROSSa}>B x A</button>
                        <input ref={BcrossA} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-6">
                        <button class="btn btn-primary col" onClick={aALONGb}>Comp(A || B)</button>
                        <input ref={AalongB} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-6">
                        <button class="btn btn-primary col"onClick={aRIGHTb}>Comp(A ⊥ B)</button>
                        <input ref={ArightB} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-6">
                        <button class="btn btn-primary col" onClick={ARG}>Angle(A O B)</button>
                        <input ref={arg} type="text" class="form-control" id="solution" disabled/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vectors;
