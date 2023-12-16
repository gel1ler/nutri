import { Box } from '@mui/material'
import React from 'react'
import Question from './Question'

const arr = [
    {
        question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, veritatis?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, obcaecati eius sit praesentium harum aliquam officiis id consequatur corrupti est porro repellendus possimus quos fugit iusto ea, esse reprehenderit cum.'
    },
    {
        question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, veritatis?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, obcaecati eius sit praesentium harum aliquam officiis id consequatur corrupti est porro repellendus possimus quos fugit iusto ea, esse reprehenderit cum.'
    },
    {
        question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, veritatis?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, obcaecati eius sit praesentium harum aliquam officiis id consequatur corrupti est porro repellendus possimus quos fugit iusto ea, esse reprehenderit cum.'
    },
    {
        question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, veritatis?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, obcaecati eius sit praesentium harum aliquam officiis id consequatur corrupti est porro repellendus possimus quos fugit iusto ea, esse reprehenderit cum.'
    },
]

const FAQ = () => {
    return (
        <Box className="flex flex-col gap-8 mt-5">
            {arr.map((i, key) =>
                <Question
                    key={key}
                    num={key + 1}
                    question={i.question}
                    answer={i.answer}
                />
            )}
        </Box>
    )
}

export default FAQ