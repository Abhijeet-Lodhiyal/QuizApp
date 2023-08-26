import * as tf from '@tensorflow/tfjs'
import * as speech from '@tensorflow-models/speech-commands'
import LoadingPage from './LoadingPage';
import { useEffect, useState } from 'react';
import axios from "axios";
import QuizQuestion from './QuizQuestion';
import ScoreScreen from './ScoreScreen';
import Speak from './Speak'



function App() {
  const [recognizer, setRecognizer] = useState(null)
  const [questions, setQuestions] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [count, setCount] = useState(0)
  const [score, setScore] = useState(0)
  const [choice , setChoice] = useState(null)
  useEffect(() => {
    loadModel()
    getQuestion()
  }, [])
  const loadModel = async () => {
    const recognizer = speech.create('BROWSER_FFT');
    await recognizer.ensureModelLoaded();
    setRecognizer(recognizer)
    console.log('Model loaded')
  }
  const getQuestion = async () => {
    const dataFetch = await axios.get('https://the-trivia-api.com/v2/questions')
    const questionData = await dataFetch.data
    setQuestions(questionData)
  }
  useEffect( ()=> {
    console.log(choice)
  },[choice])



  return (<>
    <div className={`${loaded === true ? 'hidden' : 'block'}`}>
      <LoadingPage loadFunction={setLoaded}  recognizer={recognizer}/>
    </div>
    <div className={`${loaded === false || count == 10 ? 'hidden' : 'flex md:flex-row flex-col'} w-screen h-screen bg-blue-200`} >
    {
      console.log(count)
    }
    {
      loaded === true && recognizer !== null && count != 10 &&
      <>
        <QuizQuestion questionData={questions[count]} setCount={setCount}  setScore = {setScore} choice={choice} setChoice={setChoice}/>
      </>
    }
     {loaded === true && recognizer !== null &&  
        <Speak recognizer={recognizer} setChoice={setChoice} choice={choice} count = {count}/> }
      </div>
    {
      count == 10 && <ScoreScreen score = {score} setScore = {setScore} setCount={setCount} getQuestion={getQuestion}/>
    }

  </>
  )
}

export default App
