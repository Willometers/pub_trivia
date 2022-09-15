import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react'
import QuestionCard from './QuestionCard';


// set up redux store to grab questions move fetch to higher level

const QuestionShowPage = (selection) => {
    const [ question, setQuestion ] = useState([])
    const [ allAnswers, setAllAnswers ] = useState([])
    const [ correctAnswer, setCorrectAnswer ] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://opentdb.com/api.php?amount=10`)
        .then((res) => res.json())
        .then((res) => setQuestion(res))
        .then((res) => console.log("QSP res", res))
    }

console.log('Q', question.results)

    if (question.results != null)
        return (
            <div>
                {question.results.map((ques)=> (
                    <QuestionCard ques={ques}/>
                ))}
            </div>
        )
    else 
    return (
        <Button onClick={handleSubmit}>Play</Button>
    )

}

export default QuestionShowPage