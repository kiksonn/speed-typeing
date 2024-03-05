import { useEffect, useState } from "react"

function CountdownTimer({startTimer,setStartTimer,setFinidhed}) {

    const [timeLeft, setTimeLeft] = useState(60)

    useEffect(() => {

        const timer = setTimeout(() => {
            if(startTimer && timeLeft > 0) {
                setTimeLeft(timeLeft-1)
            }
        }, 1000)

        return() => clearTimeout(timer)

    }, [startTimer, timeLeft])

    if(timeLeft <= 0) {
        setFinidhed(true)
    }

    return (
    <div className={startTimer? "" : "hidden"}>
        <p>Time left: {timeLeft}</p>
    </div>
  )
}

export default CountdownTimer