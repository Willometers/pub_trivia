import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react'
import QuestionCard from './QuestionCard';


// set up redux store to grab questions move fetch to higher level

const QuestionShowPage = (selection) => {
    const [ question, setQuestion ] = useState([])
    const [ correctAnswer, setCorrectAnswer ] = useState([])
    console.log("props", selection)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://opentdb.com/api.php?amount=10&category=${selection.selection}`)
        .then((res) => res.json())
        .then((res) => setQuestion(res))
        .then((res) => console.log("return", res))
    }

    // console.log("results", question)

    if (question.results != undefined)
        
        return (
            <div>
                {console.log("results", question)}
                Hello
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