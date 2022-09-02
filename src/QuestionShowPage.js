import { useEffect } from "react"

const QuestionShowPage = (category) => {

    useEffect(() => { 
        fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy')
        .then((res) => res.json())
        // .then(res => console.log(res))
        })

    console.log("QShow res", category)

    return (
        <div>
        </div>
    )
}

export default QuestionShowPage