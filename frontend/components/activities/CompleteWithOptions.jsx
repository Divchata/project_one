import Question from "./Question";
import {useEffect, useState} from "react";

export default function CompleteWithOptions() {
    //
    const [questions, setQuestions] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:8000/api/greeting')
            .then((response) => response.json())
            .then(data => setQuestions(data))
    }, [setQuestions])


    return <ul className="question-list">
        {questions.map(({text, options}, index) => <li className="question" key={index.toString()}><Question text={text} options={options} index={index + 1}/></li>)}
        </ul>
}
