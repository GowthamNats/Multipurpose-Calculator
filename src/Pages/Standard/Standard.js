import React, {useState} from 'react';
import './Standard.css';
import { evaluate } from 'mathjs';

const Standard = () => {

    var button_text = ["(", ")", "1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", "e", "pi","/", ".", "^", "sqrt("]

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

    const handleClick = (e) => {
        setQuestion(question.concat(e.target.name));
    }

    const backspace = () => {
        setQuestion(question.slice(0, -1));
    }

    const clear = () => {
        setQuestion("");
        setAnswer("");
    }

    const findAnswer = async () => {
        try {
            setAnswer(evaluate(question));
        }
        catch (err) {
            console.error(err.message);
            setAnswer("Error");
            await sleep(2000);
            clear();
        }
    }

    return (
        <div>
            {/* Text which shows typed symbols */}
            <div className="card">
                <div class="card-body">
                    {question}
                </div>
            </div>
            {/* Text which shows answer if solve is clicked */}
            <div className="card answer">
                <div className="card-body">
                    {answer}
                </div>
            </div>

            {/* Clickable buttons */}
            <div className="row g-0">
                <button onClick={clear} className="btn button-text">Clear</button>
                <button onClick={backspace} className="btn button-text">⌫</button>
                {button_text.map(text=> {
                    return (
                        <button name={text} onClick={handleClick} className="btn button-text">{text}</button>
                    )
                })}
                <button onClick={findAnswer} className="btn button-text">Solve</button>
            </div>
        </div>
    )
}

export default Standard;
