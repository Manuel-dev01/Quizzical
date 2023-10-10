import React from 'react'
import questions from '../data'


export default function Questions(props) {
    // const {questionState} = props
    let questionUrl = 'https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple'

    const [question, setQuestion] = React.useState()

    React.useEffect(() => {
            async function getQuestion() {
                const res = await fetch(questionUrl)
                const data = await  res.json()
                console.log(data)
            }
        
            getQuestion()
    }, [])

    
        

    return (
        <>
            {
                questions.map((ques, index) => {
                    <h1 key={index}>{ques.question}</h1>
                })
            }
        </>
    )
}