import React from "react"

export default function Introduction(props) {
    const { handleClick } = props

    return (
        <div className="intro">
            <h1>Quizzical</h1>
            <div className="description">
                <p>
                    Quizzical is a fun and engaging quiz application that offers a wide range of quizzes on various topics 
                    and subjects. Whether you're a trivia enthusiast, a knowledge seeker, or just looking for a way to 
                    challenge yourself and have some fun, Quizzical has something for everyone.
                </p>
            </div>
            <button onClick={handleClick}>Start Quiz</button>
        </div>
    )
}