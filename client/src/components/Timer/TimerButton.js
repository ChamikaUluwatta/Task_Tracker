const TimerButton = (props) => {
    const pause = props.isPaused ? "Start" : "Pause";
    return (
        <div className="flex flex-col items-center justify-evenly">
            <div onClick={props.onPauseTime} className="mb-"><button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{pause}</button></div>
            <div onClick={props.onResetTime} className="mt-2"><button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Reset</button></div>
        </div>
    )
}

export default TimerButton