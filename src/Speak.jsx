import { useEffect } from 'react'
import speak from './assets/speak.gif'


const Speak = ({ recognizer, setChoice, choice, count }) => {

  useEffect(() => {
    recognizer.listen(result => {
      var largest = 0;
      for (var i = 0; i < result.scores.length; i++) {
        if (result.scores[i] > result.scores[largest]) {
          largest = i;
        }
      }
      setChoice(recognizer.wordLabels()[largest]);
    }, {
      includeSpectrogram: true,
      probabilityThreshold: 0.75
    })
  }
    , [])


  return (
    <div className={`md:w-[40%] h-full w-full bg-[#2c3e63] text-center ${count === 10 ? 'hidden' : ''}`}>
      <img src={speak} className='w-full h-[50%]'></img>
      <div className='flex flex-col h-[45%] items-center justify-center'>
        {
          choice !== null &&
          <>
            <p className='text-white text-2xl'> You chose option :</p>
            <p className='text-white text-xl'> {choice} </p>
          </>
        }
      </div>
    </div>)
}
export default Speak