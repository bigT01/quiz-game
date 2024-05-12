import React, {useEffect, useMemo, useState} from 'react';
import {TimerTransform} from "../../utils/timerTransform";
import {useStore} from "../../store/useStore";

const Timer = ({render}: any) => {
    const duration = useStore(state => state.duration)
    const [second, setSecond] = useState(0)
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval: any = null;
        if (isRunning) {
            // If the timer is running, set an interval to update the timer every second
            interval = setInterval(() => {
                setSecond((prev) => prev - 1);
            }, 1000);
        } else {
            // If the timer is not running, clear any existing intervals
            if (interval) {
                clearInterval(interval);
            }
        }
        // Cleanup function to clear interval when component unmounts or dependency changes
        return () => clearInterval(interval);
    }, [isRunning]);

    useMemo(() => {
        if(duration){
            setSecond(duration)
            setIsRunning((old) => !old)
        }
    }, [duration]);

    useEffect(() => {
        if(second === 0){
            setIsRunning(false)
        }
    }, [second]);
    return (
        <h3>Timer: {TimerTransform(second)}{render({second})}</h3>
    );
};

export default Timer;