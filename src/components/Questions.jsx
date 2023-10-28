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

                const formattedQuestions = data.results.map((ques) => {
                    return {...ques, answers: randomize([...ques.incorrect_answers, ques.correct_answer])}
                })
                setQuestion(formattedQuestions)


            }
        
            getQuestion()
    }, [ questionState ])

        
    function randomize(values) {
        let currentIndex = values.length, randomIndex

        while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
    

        [values[currentIndex], values[randomIndex]] = [values[randomIndex], values[currentIndex]];
        }
    
        return values;
    }

    function selectAnswer(questionIndex, answerIndex) {
        console.log('User Selected:', question[questionIndex].answers[answerIndex])

        setQuestion(ques => {
            ques.map((eachQues) => {
                return {...eachQues, answers: }
            })
        })

        // function answers(ques){
        //     ques.answers.map((ques) => {
        //         return {answer: ques, selected: true}
        //     })
        // }
    }

    console.log(question)

    const eachQuestion = question.map((ques, index) => {
        return (
        <div className='eachQuestion' key={index}>
            <h3>{decode(ques.question)}</h3>
            <div>
                {ques.incorrect_answers.map((ans, ansIdx) => {
                    return <button key={ansIdx} onClick={() => selectAnswer(index, ansIdx)} className={ans.selected ? 'selected' : ''}> {decode(ans)} </button>
                })}
            </div>
        </div>
        )
    })

  
    return (
        <div>
            <div className='questionSection'>
                {eachQuestion}
            </div>
            <button className='checkAnswers'>Check Answers</button>
        </div>
    )
}