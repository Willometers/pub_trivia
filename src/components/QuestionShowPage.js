import { useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

// set up redux store to grab questions move fetch to higher level

const QuestionShowPage = (id) => {
    const navigate = useNavigate()
    const [ question, setQuestion ] = useState([])

    useEffect(() => { 
        fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy')
        .then((res) => res.json())
        .then(res => setQuestion(res))
        })

    if (question.results)
        return (
            <div>
                {console.log(question.results)}
                {question.results.map((cat)=> (       
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>{cat.question}</Card.Text>
                    <Button variant="primary">Q</Button>
                </Card.Body>
                </Card>
                ))}
            </div>
            )
         else
            return (
              
                <div>Loading</div>
            );
}

export default QuestionShowPage