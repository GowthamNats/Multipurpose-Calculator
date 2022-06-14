import React from 'react';
import './NumberTheory.css';
import * as math from 'mathjs';

const NumberTheory = () => {
    let input1 = React.createRef();
    let input2 = React.createRef();

    let lcm = React.createRef();
    let hcf = React.createRef();
    let factors = React.createRef();
    let prime = React.createRef();
    let perfect = React.createRef();

    let array = [];

    const takeInput = () => {
        let string = input1.current.value.replaceAll(" ", "");
        array = string.split(",");
    }

    const gcd = (a, b) => {
        if (b == 0)
            return a;
        return gcd(b, a % b);
    }
    

    const LCM = () => {
        takeInput();
        let result = array[0];
        for (let x in array)
            result = (((array[x] * result)) /
                    (gcd(array[x], result)));
    
        lcm.current.value = result;
    }

    const HCF = () => {
        takeInput();
        let result = array[0];
        for (let x in array) {
            if (x != 0) {
                result = gcd(array[x], result);
                if(result == 1) {
                    hcf.current.value = 1;
                }
            }
        }
        hcf.current.value = result;
    }

    const FACTORS = () => {
        let x = input2.current.value, result="";
        for (let i = 1;i<x;i++) {
            if (x%i == 0) {
                result += `${i}, `;
            }
        }
        result += `${x}`;
        factors.current.value = result;
    }

    const PRIME = () => {
        let x = input2.current.value, count=0;
        for (let i = 1;i<=x;i++) {
            if (x%i == 0) {
                count++;
            }
        }

        if (count == 2) {
            prime.current.value = "Yes";
        }
        else {
            prime.current.value = "No";
        }
    }

    const PERFECT = () => {
        let x = input2.current.value, sum=0;
        for (let i = 1;i<x;i++) {
            if (x%i == 0) {
                sum += i;
            }
        }

        if (sum == x) {
            perfect.current.value = "Yes";
        }
        else {
            perfect.current.value = "No";
        }
    }

    return (
        <div>
            <div class="number-theory">
                <div class="heading">
                    <h1 class="display-4">NUMBER THEORY CALCULATOR</h1>
                </div>
                <div class="input-fields">
                    <input ref={input1} type="text" class="form-control col" id="xCoeff1" placeholder="Enter the values separated by comma" />
                </div>
                <div class="row g-0 solution-fields">
                    <div class="row g-0 solutions col-6">
                        <button onClick={LCM} class="btn btn-primary col">Least Common Multiple</button>
                        <input ref={lcm} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-6">
                        <button onClick={HCF} class="btn btn-primary col">Highest Common Factor</button>
                        <input ref={hcf} type="text" class="form-control" id="solution" disabled/>
                    </div>
                </div>
                <div class="input-fields">
                    <input ref={input2} type="number" class="form-control col" id="xCoeff1" placeholder="Enter the number" />
                </div>
                <div class="row g-0 solution-fields">
                    <div class="row g-0 solutions col-4">
                        <button onClick={FACTORS} class="btn btn-primary col">Factors</button>
                        <input ref={factors} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-4">
                        <button onClick={PRIME} class="btn btn-primary col">Is Prime?</button>
                        <input ref={prime} type="text" class="form-control" id="solution" disabled/>
                    </div>
                    <div class="row g-0 solutions col-4">
                        <button onClick={PERFECT} class="btn btn-primary col">Is Perfect?</button>
                        <input ref={perfect} type="text" class="form-control" id="solution" disabled/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NumberTheory;
