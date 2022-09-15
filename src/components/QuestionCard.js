import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react'


const QuestionCard = (ques) => {

    console.log("card", ques)

    return (

        <Card style={{ width: '18rem' }}>
           <Card.Body>
                <Card.Title>{ques.ques.question}</Card.Title>

                {ques.ques.incorrect_answers.map((ans) => (
                    <Button variant="primary">{ans}</Button>
                ))
                
                }  
                <Button variant="primary">{ques.ques.correct_answer}</Button>
              
                
              
                
            </Card.Body>
        </Card>

    )

}

export default QuestionCard