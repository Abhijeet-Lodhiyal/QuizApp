import { useEffect, useState } from "react";

const QuizQuestion = ({ questionData , setCount ,setScore , choice, setChoice}) => {
  const [options, setOptions] = useState([]);
  const [correctAns, setCorrectAns] = useState(""); // Define correctAns state
  const [index , setIndex] = useState(-1)
  useEffect(() => {
    const correctAnswer = questionData.correctAnswer; // Retrieve the correct answer
    const op = questionData.incorrectAnswers;
    op.push(correctAnswer);
    for (var i = op.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = op[j];
      op[j] = op[i];
      op[i] = temp;
    }
    setCorrectAns(correctAnswer); // Set correctAns state
    setOptions(op);
  }, [questionData]);
  const selectedOption = async (selectedOp) => {
    if (selectedOp === correctAns) {
      console.log('True');
      setScore( (prevState) => {
        return  prevState+1
      })
    } else {
      console.log('False');
    }
      setCount((prevState) => {
       return prevState + 1
      })    
  };

  useEffect( () => {
    if(choice !== null)
    {
      var c;
      if(choice === 'one')
      {
        c = 0
      }
      else if(choice === 'two')
      {
        c = 1
      }
      else if(choice === 'three')
      {
        c = 2
      }
      else if(choice === 'four')
      {
        c = 3
      }
      else
      {
        setChoice('Please choose between one to four')
        return ;
      }
      setTimeout(() => {
        selectedOption(options[c])
        },1000)
        if(correctAns === options[c])
        document.getElementById(c).classList.add('bg-green-200')
        else
        document.getElementById(c).classList.add('bg-red-500')
      setTimeout(() => {setChoice(null)},1500)
    
    }
  },[choice])




  return (
    <div className="flex flex-col md:w-[60%] bg-[#91AFF1] items-center justify-center md:p-10 p-5 w-full">
      <h3 className="md:text-4xl text-2xl font-Acme">{questionData.question.text}</h3>
      <div className="text-center">
      {options.map((option,index) => {
        return (
          
          <button
            key={Math.random()}
            id = {index}
            onClick={(e) => {
              if(option == correctAns)
              {
                e.currentTarget.classList.add('bg-green-200')

              }
              else
              {
                e.currentTarget.classList.add('bg-red-500')

              }
              setTimeout(() => {
              selectedOption(option)
              },1000)
              }}
            className={`text-sm md:text-xl m-4 border-2 font-Acme border-black p-2 rounded-xl md:w-[380px] md:h-[100px] w-[120px] h-[60px] `}
          >
            {option}
          </button>
        );
      })}
      </div>
      
    </div>
  );
};

export default QuizQuestion;