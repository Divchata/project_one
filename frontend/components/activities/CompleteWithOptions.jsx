import Question from "./Question";

export default function CompleteWithOptions() {
    const questions = [
        {
            "text": "Eva Hunt is a _ .",
            "options": ["doctor", "historian", "writer"]
        },
        {
            "text": "Eva Hunt went to look at the statues _.",
            "options": ["yesterday", "last year", "last week"]
        },
        {
            "text": "Some of the statues are _ meters tall.",
            "options": ["10", "20", "12"]
        },
        {
            "text": "The statues appeared between _.",
            "options": ["1250 and 1500", "1200 and 1500", "1250 and 1300"]
        },
        {
            "text": "The statues all have _",
            "options": ["feet", "hands", "faces"]
        }
    ];

    return <ul className="question-list">
        {questions.map(({text, options}) => <li className="question"><Question text={text} options={options}/></li>)}
        </ul>
}
