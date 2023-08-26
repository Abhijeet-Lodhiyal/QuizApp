



const ScoreScreen = ({score , setScore , setCount , getQuestion}) => {
    return ( <div className="w-screen h-screen bg-[#91AFF1] font-Acme flex flex-col justify-center items-center">
        <h1 className="lg:text-7xl md:text-5xl text-4xl font-semibold ">Your score is :</h1>
        <p className="md:text-5xl text-3xl">{score}/{10}</p>
        <button className="text-3xl border-2 border-black p-2 m-4 rounded-2xl" onClick={() => {
            getQuestion()
            setScore(0)
            setCount(0)
        }}>Play again!</button>
    </div>)
}
export default ScoreScreen