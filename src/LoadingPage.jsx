


const LoadingPage = ({loadFunction,recognizer}) => {
    return (<div className="w-full bg-[#91AFF1] h-screen flex flex-col items-center align-middle justify-evenly text-center p-2">
    <div className={`${recognizer === null ? 'hidden':''}`}>
            <p className="font-bold text-3xl font-Acme ">This quiz contains 10 question.</p>
            <p className="font-light text-3xl font-Acme "> You can select the option by clicking on them or by speaking one to four for the options.</p>
        </div>
        <h1 className="lg:text-7xl md:text-5xl text-4xl font-semibold font-Acme ">Are you ready?</h1>
        <div className={`${recognizer !== null ? 'hidden':''}`}>
            <p className="text-3xl ">Waiting for the model to load</p>
            <p className="text-7xl animate-spin text-blue-800">.</p>
        </div>
        
        
        <button onClick={ () => { 
            loadFunction(!false)
            console.log('loaded')
            }} disabled={recognizer !== null ? false : true} className={`${recognizer === null ? ' bg-[#91AFF1] cursor-not-allowed':''} text-xl  border-2 font-Acme border-black rounded-xl pl-4 pr-4 pt-2 pb-2`}>Yes</button>
    </div>);
}
export default LoadingPage;