import React from 'react';
import './Matrices.css';

const Matrices = () => {

    // variables
    let q1 = React.createRef();
    let q2 = React.createRef();
    let q3 = React.createRef();
    let q4 = React.createRef();
    let q5 = React.createRef();
    let q6 = React.createRef();
    let q7 = React.createRef();
    let q8 = React.createRef();
    let q9 = React.createRef();

    let det = React.createRef();
    let trace = React.createRef();

    let t1 = React.createRef();
    let t2 = React.createRef();
    let t3 = React.createRef();
    let t4 = React.createRef();
    let t5 = React.createRef();
    let t6 = React.createRef();
    let t7 = React.createRef();
    let t8 = React.createRef();
    let t9 = React.createRef();

    let s1 = React.createRef();
    let s2 = React.createRef();
    let s3 = React.createRef();
    let s4 = React.createRef();
    let s5 = React.createRef();
    let s6 = React.createRef();
    let s7 = React.createRef();
    let s8 = React.createRef();
    let s9 = React.createRef();

    // functions 
    const DET = () => {
        det.current.value = (((q1.current.value)*(q5.current.value)*(q9.current.value) + (q2.current.value)*(q6.current.value)*(q7.current.value) + (q3.current.value)*(q4.current.value)*(q8.current.value)) - ((q3.current.value)*(q5.current.value)*(q7.current.value) + (q2.current.value)*(q4.current.value)*(q9.current.value) + (q1.current.value)*(q6.current.value)*(q8.current.value))).toFixed(3);
    }

    const TRACE = () => {
        trace.current.value = ((q1.current.value*1) + (q5.current.value*1) + (q9.current.value*1)).toFixed(3);
    }

    const TRANSPOSE = () => {
        t1.current.value = q1.current.value;
        t2.current.value = q4.current.value;
        t3.current.value = q7.current.value;
        t4.current.value = q2.current.value;
        t5.current.value = q5.current.value;
        t6.current.value = q8.current.value;
        t7.current.value = q3.current.value;
        t8.current.value = q6.current.value;
        t9.current.value = q9.current.value;
    }

    const INVERSE = () => {
        if (det.current.value != 0) {
            s1.current.value = (((q5.current.value*q9.current.value) - (q6.current.value*q8.current.value))/det.current.value).toFixed(3);
            s2.current.value = (((q8.current.value*q3.current.value) - (q9.current.value*q2.current.value))/det.current.value).toFixed(3);
            s3.current.value = (((q2.current.value*q6.current.value) - (q5.current.value*q3.current.value))/det.current.value).toFixed(3);
            s4.current.value = (((q6.current.value*q7.current.value) - (q4.current.value*q9.current.value))/det.current.value).toFixed(3);
            s5.current.value = (((q9.current.value*q1.current.value) - (q3.current.value*q7.current.value))/det.current.value).toFixed(3);
            s6.current.value = (((q3.current.value*q4.current.value) - (q1.current.value*q6.current.value))/det.current.value).toFixed(3);
            s7.current.value = (((q4.current.value*q8.current.value) - (q7.current.value*q5.current.value))/det.current.value).toFixed(3);
            s8.current.value = (((q7.current.value*q2.current.value) - (q8.current.value*q1.current.value))/det.current.value).toFixed(3);
            s9.current.value = (((q1.current.value*q5.current.value) - (q2.current.value*q4.current.value))/det.current.value).toFixed(3);
        }
    }

    const Compute = () => {
        DET();
        TRACE();
        TRANSPOSE();
        INVERSE();
    }

    return (
        <div>
            <div class="matrices">
                <div class="heading">
                    <h1 class="display-4">MATRICES CALCULATOR</h1>
                </div>
                <div class="row g-0">
                    <div class="col-6 input-fields">
                        <div class="row g-0 justify-content-center">
                            <div class="header">
                                <h1 class="display-4">Matrix</h1>
                            </div>
                            <div class="col-4">
                                <input ref={q1} type="number" class="form-control" id="question"/>
                            </div>
                            <div class="col-4">
                                <input ref={q2} type="number" class="form-control" id="question"/>
                            </div>
                            <div class="col-4">
                                <input ref={q3} type="number" class="form-control" id="question"/>
                            </div>
                            <div class="col-4">
                                <input ref={q4} type="number" class="form-control" id="question"/>
                            </div>
                            <div class="col-4">
                                <input ref={q5} type="number" class="form-control" id="question"/>
                            </div>
                            <div class="col-4">
                                <input ref={q6} type="number" class="form-control" id="question"/>
                            </div>
                            <div class="col-4">
                                <input ref={q7} type="number" class="form-control" id="question"/>
                            </div>
                            <div class="col-4">
                                <input ref={q8} type="number" class="form-control" id="question"/>
                            </div>
                            <div class="col-4">
                                <input ref={q9} type="number" class="form-control" id="question"/>
                            </div>
                            <button class="btn btn-primary text-center" onClick={Compute}>Compute</button>
                        </div>
                        <div class="row g-0 justify-content-center">
                            <div class="col-12 row g-0 det">
                                <label for="determinant" class="col-4 col-form-label">Determinant = </label>
                                <input ref={det} type="number" class="form-control col" id="determinant" disabled/>
                            </div>
                            <div class="col-12 row g-0 det">
                                <label for="trace" class="col-3 offset-1 col-form-label">Trace = </label>
                                <input ref={trace} type="number" class="form-control col" id="trace" disabled/>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 solution-fields">
                        <div class="row g-0 transpose">
                            <div class="header">
                                <h1 class="display-4">Transpose</h1>
                            </div>
                            <div class="col-4">
                                <input ref={t1} type="number" class="form-control" id="solution" disabled/>
                            </div>
                            <div class="col-4">
                                <input ref={t2} type="text" class="form-control" id="solution" disabled/>
                            </div>
                            <div class="col-4">
                                <input ref={t3} type="number" class="form-control" id="solution" disabled/>
                            </div>
                            <div class="col-4">
                                <input ref={t4} type="number" class="form-control" id="solution" disabled/>
                            </div>
                            <div class="col-4">
                                <input ref={t5} type="number" class="form-control" id="solution" disabled/>
                            </div>
                            <div class="col-4">
                                <input ref={t6} type="number" class="form-control" id="solution" disabled/>
                            </div>
                            <div class="col-4">
                                <input ref={t7} type="number" class="form-control" id="solution" disabled/>
                            </div>
                            <div class="col-4">
                                <input ref={t8} type="number" class="form-control" id="solution" disabled/>
                            </div>
                            <div class="col-4">
                                <input ref={t9} type="number" class="form-control" id="solution" disabled/>
                            </div>
                        </div>
                        <div class="row g-0 inverse">
                            <div class="header">
                                <h1 class="display-4">Inverse</h1>
                            </div>
                            <div class="col-4">
                                <input ref={s1} type="number" class="form-control" id="solution" disabled/>
                            </div>
                            <div class="col-4">
                                <input ref={s2} type="number" class="form-control" id="solution" disabled/>
                            </div>
                            <div class="col-4">
                                <input ref={s3} type="number" class="form-control" id="solution" disabled/>
                            </div>
                            <div class="col-4">
                                <input ref={s4} type="number" class="form-control" id="solution" disabled/>
                            </div>
                            <div class="col-4">
                                <input ref={s5} type="number" class="form-control" id="solution" disabled/>
                            </div>
                            <div class="col-4">
                                <input ref={s6} type="number" class="form-control" id="solution" disabled/>
                            </div>
                            <div class="col-4">
                                <input ref={s7} type="number" class="form-control" id="solution" disabled/>
                            </div>
                            <div class="col-4">
                                <input ref={s8} type="number" class="form-control" id="solution" disabled/>
                            </div>
                            <div class="col-4">
                                <input ref={s9} type="number" class="form-control" id="solution" disabled/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Matrices;
