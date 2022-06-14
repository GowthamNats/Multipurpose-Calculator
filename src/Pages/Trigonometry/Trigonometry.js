import React, {useState} from 'react';
import './Trigonometry.css';
import * as math from 'mathjs';
import { pi } from 'mathjs';

const Trigonometry = () => {

    const [sine, setSin] = useState("Answer");
    const [cosine, setCos] = useState("Answer");
    const [tangent, setTan] = useState("Answer");
    const [secant, setSec] = useState("Answer");
    const [cosecant, setCosec] = useState("Answer");
    const [cotangent, setCot] = useState("Answer");

    const [asine, setaSin] = useState("Answer");
    const [acosine, setaCos] = useState("Answer");
    const [atangent, setaTan] = useState("Answer");
    const [asecant, setaSec] = useState("Answer");
    const [acosecant, setaCosec] = useState("Answer");
    const [acotangent, setaCot] = useState("Answer");

    let textInput = React.createRef();
    let answer = React.createRef();
    let basic = React.createRef();
    let inverse = React.createRef();

    const degreesToRadians = () => {
        answer.current.value = (textInput.current.value*pi/180).toFixed(2) + " radians";
    }

    const radiansToDegrees = () => {
        answer.current.value = (textInput.current.value*180/pi).toFixed(2) + " degrees";
    }

    const basicFns = () => {
        if (basic.current.value === null) {
            return;
        }
        setSin(math.sin(math.unit(basic.current.value, 'deg')).toFixed(3));
        setCos(math.cos(math.unit(basic.current.value, 'deg')).toFixed(3));
        setTan(math.tan(math.unit(basic.current.value, 'deg')).toFixed(3));
        setSec(math.sec(math.unit(basic.current.value, 'deg')).toFixed(3));
        setCosec(math.csc(math.unit(basic.current.value, 'deg')).toFixed(3));
        setCot(math.cot(math.unit(basic.current.value, 'deg')).toFixed(3));
    }

    const inverseFns = () => {
        if (inverse.current.value === null) {
            return;
        }
        if (inverse.current.value > 1 || inverse.current.value < -1) {
            setaSin((((math.asin(inverse.current.value).im)/pi)*180).toFixed(2) + "° i");
            setaCos((((math.acos(inverse.current.value).im)/pi)*180).toFixed(2) + "° i");
            setaTan(((math.atan(inverse.current.value)/pi)*180).toFixed(2) + "°");
            setaCosec(((math.acsc(inverse.current.value)/pi)*180).toFixed(2) + "°");
            setaSec(((math.asec(inverse.current.value)/pi)*180).toFixed(2) + "°");
            setaCot(((math.acot(inverse.current.value)/pi)*180).toFixed(2) + "°");
        }
        else if (inverse.current.value < 1 || inverse.current.value > -1) {
            setaSin(((math.asin(inverse.current.value)/pi)*180).toFixed(2) + "°");
            setaCos(((math.acos(inverse.current.value)/pi)*180).toFixed(2) + "°");
            setaTan(((math.atan(inverse.current.value)/pi)*180).toFixed(2) + "°");
            setaSec((((math.asec(inverse.current.value).im)/pi)*180).toFixed(2)  + "° i");
            setaCosec((((math.acsc(inverse.current.value).im)/pi)*180).toFixed(2) + "° i");
            setaCot(((math.acot(inverse.current.value)/pi)*180).toFixed(2) + "°");
        }
    }

    return (
        <div>
            <div className="row g-0">
                <div className="col-12 angleCalculations boxes">
                    <form className="row g-0">
                        <div class="mb-3 col-6 angleFields">
                            <label for="AngleCalculation" class="form-label">Enter the angle</label>
                            <input ref={textInput} type="number" class="form-control" id="AngleCalculation"/>
                        </div>
                        <div class="mb-3 col-6 angleFields">
                            <label for="AngleCalculation2" class="form-label">Answer</label>
                            <fieldset disabled>
                                <input  ref={answer} type="text" class="form-control" id="AngleCalculation2"/>
                            </fieldset>
                        </div>
                        <div class="col-12">
                            <button type="button" class="btn btn-primary computeAngle" onClick={degreesToRadians}>Degrees to Radians</button>
                            <button type="button" class="btn btn-primary computeAngle" onClick={radiansToDegrees}>Radians to Degrees</button>
                        </div>
                    </form>
                </div>
                <div className="col-6 boxes trigonometricFns">
                    <h4 className="heading">BASIC FUNCTIONS</h4>
                    <input  ref={basic} type="number" class="form-control" id="FnCalculation" placeholder="Enter the angle in degrees"/>
                    <div className="row g-0">
                        <div className="col-6 fns">
                            <p>Sine : </p>
                        </div>
                        <div className="col-6 ans">
                            <p>{sine}</p>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-6 fns">
                            <p>Cosine : </p>
                        </div>
                        <div className="col-6 ans">
                            <p>{cosine}</p>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-6 fns">
                            <p>Tangent : </p>
                        </div>
                        <div className="col-6 ans">
                            <p>{tangent}</p>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-6 fns">
                            <p>Secant : </p>
                        </div>
                        <div className="col-6 ans">
                            <p>{secant}</p>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-6 fns">
                            <p>Cosecant : </p>
                        </div>
                        <div className="col-6 ans">
                            <p>{cosecant}</p>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-6 fns">
                            <p>Cotangent : </p>
                        </div>
                        <div className="col-6 ans">
                            <p>{cotangent}</p>
                        </div>
                    </div>
                    <div className="col-12 computeFns">
                        <button type="button" class="btn btn-primary" onClick={basicFns}>Compute</button>
                    </div>
                </div>
                <div className="col-6 boxes trigonometricFns">
                    <h4 className="heading">INVERSE FUNCTIONS</h4>
                    <input  ref={inverse} type="number" class="form-control" id="FnCalculation" placeholder="Enter a number"/>
                    <div className="row g-0">
                        <div className="col-6 fns">
                            <p>Sine : </p>
                        </div>
                        <div className="col-6 ans">
                            <p>{asine}</p>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-6 fns">
                            <p>Cosine : </p>
                        </div>
                        <div className="col-6 ans">
                            <p>{acosine}</p>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-6 fns">
                            <p>Tangent : </p>
                        </div>
                        <div className="col-6 ans">
                            <p>{atangent}</p>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-6 fns">
                            <p>Secant : </p>
                        </div>
                        <div className="col-6 ans">
                            <p>{asecant}</p>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-6 fns">
                            <p>Cosecant : </p>
                        </div>
                        <div className="col-6 ans">
                            <p>{acosecant}</p>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-6 fns">
                            <p>Cotangent : </p>
                        </div>
                        <div className="col-6 ans">
                            <p>{acotangent}</p>
                        </div>
                    </div>
                    <div className="col-12 computeFns">
                        <button type="button" class="btn btn-primary" onClick={inverseFns}>Compute</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trigonometry;
