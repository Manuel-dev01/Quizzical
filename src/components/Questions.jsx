import React from 'react'
import { decode } from 'html-entities'


export default function Questions(props) {
    const { questionState } = props
    let questionUrl = 'https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple'

    const [question, setQuestion] = React.useState([])

    React.useEffect(() => {
            async function getQuestion() {
                const res = await fetch(questionUrl)
                const data = await  res.json()
                setQuestion(data.results)
            }
        
            getQuestion()
    }, [ questionState ])

    question.forEach((ques) => {
        ques.incorrect_answers.push(ques.correct_answer)
        // console.log(ques.incorrect_answers)
        randomize(ques.incorrect_answers)
    })
        
    function randomize(values) {
        let index = values.length,
        randomIndex
    
        // While there remain elements to shuffle.
        while (index != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * index)
        index--
    
        // And swap it with the current element.
        [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
        }
    
        return values;
    }

    // function selectAnswer(index) {
    //     setQuestion((prevQues) => {
    //         prevQues.map((ques, i) => {
    //             return {...ques, selectedQuestion: i === index ? 1 : 0}
    //         })
    //     }) 
    //     // {...ques, selectedQuestion: i === index ? 1 : 0}  
    // }

    function selectAnswer() {
        console.log('chose this ansswer')
    }

    const eachQuestion = question.map((ques, index) => {
        return (
        <div className='eachQuestion'>
            <h3 key={index}>{decode(ques.question)}</h3>
            <div>
                {ques.incorrect_answers.map((ans) => {
                    return <button onClick={selectAnswer}> {decode(ans)} </button>
                })}
            </div>
        </div>
        )
    })

    console.log(question)
  
    return (
        <div>
            <div className='questionSection'>
                {eachQuestion}
            </div>
            <button className='checkAnswers'>Check Answers</button>
        </div>
    )
}