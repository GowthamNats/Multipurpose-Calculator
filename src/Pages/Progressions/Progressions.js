import React from 'react';
import './Progressions.css';

const Progressions = () => {

    let apa = React.createRef();
    let apd = React.createRef();
    let apn = React.createRef();
    let aps = React.createRef();
    let apan = React.createRef();

    let gpa = React.createRef();
    let gpd = React.createRef();
    let gpn = React.createRef();
    let gps = React.createRef();
    let gpan = React.createRef();

    let hpa = React.createRef();
    let hpd = React.createRef();
    let hpn = React.createRef();
    let hps = React.createRef();
    let hpan = React.createRef();

    const AP = () => {
        apan.current.value = ((1*apa.current.value) + ((apn.current.value - 1)*(apd.current.value))).toFixed(3);
        aps.current.value = ((apn.current.value/2)*((2*apa.current.value) + (apn.current.value - 1)*(apd.current.value))).toFixed(3);  
    }

    const GP = () => {
        gpan.current.value = ((1*gpa.current.value)*(Math.pow(gpd.current.value, (gpn.current.value - 1)))).toFixed(3);
        gps.current.value = ((gpa.current.value)*(Math.pow(gpd.current.value, gpn.current.value) - 1)/(gpd.current.value - 1)).toFixed(3);
    }

    const HP = () => {
        let a = (1/hpa.current.value);
        let d = hpd.current.value;
        let n = hpn.current.value;
        hpan.current.value = (1/(a + (d)*(n - 1))).toFixed(3);
        hps.current.value = (Math.log(((2*a) + (2*n - 1)))/(2*a - d)).toFixed(3);
    }

    return (
        <div>
            <div class="row g-0 progressions">
                <div class="ap col">
                    <div class="heading">
                        <p class="display-4">ARITHMETIC PROGRESSION</p>
                    </div>
                    <div class="question justify-content-center row g-0">
                        <input ref={apa} type="number" class="form-control" id="a" placeholder="First term" />
                        <input ref={apd} type="number" class="form-control" id="d" placeholder="Common difference" />
                        <input ref={apn} type="number" class="form-control" id="n" placeholder="Total number of terms" />
                    </div>
                    <div class="button justify-content-center row g-0">
                        <button class="btn btn-primary" onClick={AP}>Compute</button>
                    </div>
                    <div class="answers justify-content-center row g-0">
                        <input ref={aps} type="number" class="form-control" id="S" placeholder="Sum of all terms" disabled/>
                        <input ref={apan} type="number" class="form-control" id="an" placeholder="Last term" disabled/>
                    </div>
                </div>
                <div class="gp col">
                    <div class="heading">
                        <p class="display-4">GEOMETRIC PROGRESSION</p>
                    </div>
                    <div class="question justify-content-center row g-0">
                        <input ref={gpa} type="number" class="form-control" id="a" placeholder="First term" />
                        <input ref={gpd} type="number" class="form-control" id="d" placeholder="Common ratio" />
                        <input ref={gpn} type="number" class="form-control" id="n" placeholder="Total number of terms" />
                    </div>
                    <div class="button justify-content-center row g-0">
                        <button class="btn btn-primary" onClick={GP}>Compute</button>
                    </div>
                    <div class="answers justify-content-center row g-0">
                        <input ref={gps} type="number" class="form-control" id="S" placeholder="Sum of all terms" disabled/>
                        <input ref={gpan} type="number" class="form-control" id="an" placeholder="Last term" disabled/>
                    </div>
                </div>
                <div class="hp col">
                    <div class="heading">
                        <p class="display-4">HARMONIC PROGRESSION</p>
                    </div>
                    <div class="question justify-content-center row g-0">
                        <input ref={hpa} type="number" class="form-control" id="a" placeholder="First term" />
                        <input ref={hpd} type="number" class="form-control" id="d" placeholder="Common difference" />
                        <input ref={hpn} type="number" class="form-control" id="n" placeholder="Total number of terms" />
                    </div>
                    <div class="button justify-content-center row g-0">
                        <button class="btn btn-primary" onClick={HP}>Compute</button>
                    </div>
                    <div class="answers justify-content-center row g-0">
                        <input ref={hps} type="text" class="form-control" id="S" placeholder="Sum of all terms" disabled/>
                        <input ref={hpan} type="number" class="form-control" id="an" placeholder="Last term" disabled/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Progressions;
