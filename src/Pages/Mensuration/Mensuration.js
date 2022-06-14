import React, {useState} from 'react';
import './Mensuration.css';

const Mensuration = () => {

    const [shape1, setShape1] = useState("Circle");
    const [shape2, setShape2] = useState("Cube");

    const [inputText1, setInputText1] = useState("Radius");
    const [inputText2, setInputText2] = useState("Side");

    const input1 = React.createRef();
    const input2 = React.createRef();
    const output1 = React.createRef();
    const output2 = React.createRef();
    const output3 = React.createRef();
    const output4 = React.createRef();

    let array1 = [];
    let array2 = [];

    const TakeInput1 = () => {
        let string = input1.current.value.replaceAll(" ", "");
        array1 = string.split(",");
    }

    const TakeInput2 = () => {
        let string = input2.current.value.replaceAll(" ", "");
        array2 = string.split(",");
    }

    const change1 = (e) => {
        setShape1(e.target.value);
        if (shape1 === "Circle") {
            setInputText1("Radius");
        }
        else if (shape1 === "Ellipse") {
            setInputText1("Semiminor axis, Semimajor axis");
        }
        else if (shape1 === "Trianglebh") {
            setInputText1("Base, Height");
        }
        else if (shape1 === "Triangles") {
            setInputText1("Side 1, Side 2, Side 3");
        }
        else if (shape1 === "Square") {
            setInputText1("Side");
        }
        else if (shape1 === "Rectangle") {
            setInputText1("Length, Breadth");
        }
        else if (shape1 === "Parallelogram") {
            setInputText1("Length, Height");
        }
        else if (shape1 === "Rhombus") {
            setInputText1("Diagonal 1, Diagonal 2");
        }
        else if (shape1 === "Trapezium") {
            setInputText1("Shorter side, Longer side, Height");
        }
    }

    const change2 = (e) => {
        setShape2(e.target.value);
        if (shape2 === "Cube") {
            setInputText2("Side");
        }
        else if (shape2 === "Cuboid") {
            setInputText2("Length, Breadth, Height");
        }
        else if (shape2 === "Tetrahedron") {
            setInputText2("Side");
        }
        else if (shape2 === "Hemisphere") {
            setInputText2("Radius");
        }
        else if (shape2 === "Sphere") {
            setInputText2("Radius");
        }
        else if (shape2 === "Cone") {
            setInputText2("Base Radius, Height");
        }
        else if (shape2 === "Cylinder") {
            setInputText2("Base Radius, Height");
        }
    }

    const d2Compute = () => {
        if (shape1 === "Circle") {
            output1.current.value = (Math.PI*(input1.current.value)*(input1.current.value)).toFixed(3);
            output2.current.value = (2*Math.PI*input1.current.value).toFixed(3);
        }
        else if (shape1 === "Ellipse") {
            TakeInput1();
            output1.current.value = (Math.PI*array1[0]*array1[1]).toFixed(3);
            output2.current.value = (2*Math.PI*Math.sqrt((1*array1[0]*array1[0] + 1*array1[1]*array1[1])/2)).toFixed(3);
        }
        else if (shape1 === "Trianglebh") {
            TakeInput1();
            output1.current.value = (0.5*array1[0]*array1[1]).toFixed(3);
            output2.current.value = (1*array1[0] + 2*(Math.sqrt((1*array1[0]*array1[0])/2 + 1*array1[0]*array1[0]))).toFixed(3);
        }
        else if (shape1 === "Triangles") {
            TakeInput1();
            let s = (1*array1[0] + 1*array1[1] + 1*array1[2])/2;
            let s1 = s - array1[0];
            let s2 = s - array1[1];
            let s3 = s - array1[2];
            output1.current.value = (Math.sqrt(s*s1*s2*s3)).toFixed(3);
            output2.current.value = (2*s).toFixed(3);
        }
        else if (shape1 === "Square") {
            output1.current.value = ((input1.current.value)*(input1.current.value)).toFixed(3);
            output2.current.value = (4*input1.current.value).toFixed(3);
        }
        else if (shape1 === "Rectangle") {
            TakeInput1();
            output1.current.value = (array1[0]*array1[1]).toFixed(3);
            output2.current.value = ((1*array1[0] + 1*array1[1])*2).toFixed(3);
        }
        else if (shape1 === "Parallelogram") {
            TakeInput1();
            output1.current.value = (array1[0]*array1[1]).toFixed(3);
            output2.current.value = ((1*array1[0] + (1*array1[1]/Math.sin(Math.atan(array1[1]/array1[0])))*2)).toFixed(3);
        }
        else if (shape1 === "Rhombus") {
            TakeInput1();
            output1.current.value = (array1[0]*array1[1]*0.5).toFixed(3);
            output2.current.value = (2*Math.sqrt(array1[0]*array1[0] + array1[1]*array1[1])).toFixed(3);
        }
        else if (shape1 === "Trapezium") {
            TakeInput1();
            output1.current.value = (0.5*array1[2]*(array1[0]*1 + array1[1]*1)).toFixed(3);
            output2.current.value = (1*array1[0] + 1*array1[1] + (2*array1[2]/Math.sin(Math.atan(array1[1]/array1[0])))).toFixed(3);
        }
    }

    const d3Compute = () => {
        if (shape2 === "Cube") {
            output3.current.value = (6*input2.current.value*input2.current.value).toFixed(3);
            output4.current.value = (input2.current.value*input2.current.value*input2.current.value).toFixed(3);
        }
        else if (shape2 === "Cuboid") {
            TakeInput2();
            output3.current.value = (2*(array2[0]*array2[1] + array2[1]*array2[2] + array2[2]*array2[0])).toFixed(3);
            output4.current.value = (array2[0]*array2[1]*array2[2]*1).toFixed(3);
        }
        else if (shape2 === "Tetrahedron") {
            output3.current.value = (Math.sqrt(3)*input2.current.value*input2.current.value).toFixed(3);
            output4.current.value = (input2.current.value*input2.current.value*input2.current.value/(6*Math.sqrt(2))).toFixed(3);
        }
        else if (shape2 === "Hemisphere") {
            output3.current.value = (3*Math.PI*input2.current.value*input2.current.value).toFixed(3);
            output4.current.value = ((2/3)*Math.PI*input2.current.value*input2.current.value*input2.current.value).toFixed(3);
        }
        else if (shape2 === "Sphere") {
            output3.current.value = (4*Math.PI*input2.current.value*input2.current.value).toFixed(3);
            output4.current.value = ((4/3)*Math.PI*input2.current.value*input2.current.value*input2.current.value).toFixed(3);
        }
        else if (shape2 === "Cone") {
            TakeInput2();
            output3.current.value = (Math.PI*array2[0]*Math.sqrt(array2[0]*array2[0] + array2[1]*array2[1])).toFixed(3);
            output4.current.value = (Math.PI*array2[0]*array2[0]*array2[1]/3).toFixed(3);
        }
        else if (shape2 === "Cylinder") {
            TakeInput2();
            output3.current.value = (2*Math.PI*array2[0]*array2[1]).toFixed(3);
            output4.current.value = (Math.PI*array2[0]*array2[0]*array2[1]).toFixed(3);
        }
    }

    return (
        <div>
            <div class="mensuration">
                <div class="heading">
                    <h1 class="display-4">MENSURATION CALCULATOR</h1>
                </div>
                <div class="row g-0 justify-content-center">
                    <div class="col-6 d2">
                        <h4 className="heading text-center">2D SHAPES</h4>
                        <input ref={input1} type="text" class="form-control" id="question" placeholder={inputText1}/>
                        <select class="form-select" aria-label="Default select example" onClick={change1}>
                            <option selected value="Circle">Circle</option>
                            <option value="Ellipse">Ellipse</option>
                            <option value="Trianglebh">Triangle (base, height)</option>
                            <option value="Triangles">Triangle (sides)</option>
                            <option value="Square">Square</option>
                            <option value="Rectangle">Rectangle</option>
                            <option value="Parallelogram">Parallelogram</option>
                            <option value="Rhombus">Rhombus</option>
                            <option value="Trapezium">Trapezium</option>
                        </select>
                        <div class="row g-0 justify-content-center">
                            <button class="btn btn-primary" onClick={d2Compute}>Compute</button>
                        </div>
                        <div class="row g-0">
                            <p class="lead col-4">Perimeter = </p>
                            <input ref={output2} type="text" class="form-control col" id="answer" disabled/>
                        </div> 
                        <div class="row g-0">
                            <p class="lead col-4">Area = </p>
                            <input ref={output1} type="text" class="form-control col" id="answer" disabled/>
                        </div>               
                    </div>
                    <div class="col-6 d3">
                        <h4 className="heading text-center">3D SHAPES</h4>
                        <input ref={input2} type="text" class="form-control" id="question" placeholder={inputText2}/>
                        <select class="form-select" aria-label="Default select example" onClick={change2}>
                            <option value="Cube">Cube</option>
                            <option value="Cuboid">Cuboid</option>
                            <option value="Tetrahedron">Tetrahedron</option>
                            <option value="Hemisphere">Hemiphere</option>
                            <option value="Sphere">Sphere</option>
                            <option value="Cone">Cone</option>
                            <option value="Cylinder">Cylinder</option>
                        </select>
                        <div class="row g-0 justify-content-center">
                            <button class="btn btn-primary" onClick={d3Compute}>Compute</button>
                        </div>
                        <div class="row g-0">
                            <p class="lead col-5">Surface Area = </p>
                            <input ref={output3} type="text" class="form-control col" id="answer" disabled/>
                        </div>
                        <div class="row g-0">
                            <p class="lead col-5">Volume = </p>
                            <input ref={output4} type="text" class="form-control col" id="answer" disabled/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mensuration;
