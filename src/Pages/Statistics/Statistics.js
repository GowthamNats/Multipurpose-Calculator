import React from 'react';
import './Statistics.css';
import * as math from 'mathjs';

const Statistics = () => {

    let input = React.createRef();

    let am = React.createRef();
    let gm = React.createRef();
    let hm = React.createRef();
    let median = React.createRef();
    let mode = React.createRef();
    let range = React.createRef();
    let std = React.createRef();
    let variance = React.createRef();
    let maxmin = React.createRef();

    let array = [];

    const takeInput = () => {
        let string = input.current.value.replaceAll(" ", "");
        array = string.split(",");
    }

    const AM = () => {
        takeInput();
        am.current.value = (math.mean(array)).toFixed(3);
    }

    const GM = () => {
        takeInput();
        let pdt = 1, count = 0, x;
        for (x in array) {
            pdt *= array[x];
            count++;
        }
        gm.current.value = (Math.pow(pdt, (1/count))).toFixed(3);
    }

    const HM = () => {
        takeInput();
        let sum = 0, count = 0, x;
        for (x in array) {
            sum += (1/array[x]);
            count++;
        }
        hm.current.value = (count/sum).toFixed(3);
    }

    const MEDIAN = () => {
        takeInput();
        median.current.value = (math.median(array)).toFixed(3);
    }

    const MODE = () => {
        takeInput();
        mode.current.value = math.mode(array);
    }

    const RANGE = () => {
        takeInput();
        range.current.value = (math.max(array) - math.min(array)).toFixed(3);
    }

    const STD = () => {
        takeInput();
        std.current.value = (math.std(array)).toFixed(3);
    }

    const VARIANCE = () => {
        takeInput();
        variance.current.value = (math.variance(array)).toFixed(3);
    }

    const MAXMIN = () => {
        takeInput();
        maxmin.current.value = `Max: ${math.max(array)}, Min: ${math.min(array)}`;
    }

    return (
        <div>
            <div class="statistics">
                <div class="heading">
                    <h1 class="display-4">STATISTICS CALCULATOR</h1>
                </div>
                <div class="input-fields">
                    <input ref={input} type="text" class="form-control col" id="xCoeff1" placeholder="Enter the values separated by comma" />
                </div>
                <div class="row g-0 solution-fields">
                    <div class="row g-0 solutions col-4">
                        <button onClick={AM} class="btn btn-primary col">Arithmetic Mean</button>
                        <input ref={am} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-4">
                        <button onClick={GM} class="btn btn-primary col">Geometric Mean</button>
                        <input ref={gm} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-4">
                        <button onClick={HM} class="btn btn-primary col">Harmonic Mean</button>
                        <input ref={hm} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-4">
                        <button onClick={MEDIAN} class="btn btn-primary col">Median</button>
                        <input ref={median} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-4">
                        <button onClick={MODE} class="btn btn-primary col">Mode</button>
                        <input ref={mode} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-4">
                        <button onClick={RANGE} class="btn btn-primary col">Range</button>
                        <input ref={range} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-4">
                        <button onClick={VARIANCE} class="btn btn-primary col">Variance</button>
                        <input ref={variance} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-4">
                        <button onClick={STD} class="btn btn-primary col">Standard Deviation</button>
                        <input ref={std} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-4">
                        <button onClick={MAXMIN} class="btn btn-primary col">Max and Min value</button>
                        <input ref={maxmin} type="text" class="form-control" id="solution" disabled/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics;
