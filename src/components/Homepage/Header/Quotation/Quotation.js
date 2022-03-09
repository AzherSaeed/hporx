import React,{useState} from 'react'
import { QuotatinMainContainer } from './StyledQuotation'

const Quotation = ({ sendValue }) => {
  const [question, setQuestion] = useState(0)
  console.log('question',question)
  const questions = ["When is your birthday?",
    "What is your favorite animal",
    " What do you do for a living?",
    "If you could travel anywhere in the world, where would you go?",
    "What was your favorite school subject?",
    "Do you have a small or big family?",
    "What genres of music do you like best?"]
    const changeQuestion=()=>{
     setQuestion(Math.floor(Math.random() * 7));
    }
  return (
    <QuotatinMainContainer>
      <div className='inner-div'>
        <b>Quotation of the day </b>
        <p>{questions[question]}</p>
        <div className='cancel-btn'>
          <h3 onClick={() => {
            sendValue(false);
            changeQuestion(7);
          }}>X</h3>
        </div>
      </div>
    </QuotatinMainContainer>
  )
}

export default Quotation