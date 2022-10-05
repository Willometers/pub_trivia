import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react'


const QuestionCard = (ques) => {
    const [questions, setQuestions] = useState([])
    const [ incorrectAnswers, setIncorrectAnswers ] = useState([])
    const [ allAnswers, setAllAnswers ] = useState([])


    if (allAnswers.length > 0)
    return (

        <Card style={{ width: '18rem' }}>
            What
           <Card.Body>
                <Card.Title>{ques.ques.question}</Card.Title>

                {ques.ques.incorrect_answers.map((ans) => (
                    <Button variant="primary">{ans}</Button>
                ))}  

                <Button variant="primary">{ques.ques.correct_answer}</Button>
                
            </Card.Body>
        </Card>
    )

    else (
        <div>Loading</div>
    )

}

export default QuestionCard