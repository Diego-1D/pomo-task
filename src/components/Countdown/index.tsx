import { useEffect, useState } from 'react'
import { NewTask } from '../../type/tasks'
import Button from '../Button'
import { timeForSeconds } from '../utils/time'
import styles from './countdown.module.scss'

interface Props {
    selected: NewTask | undefined,
    finishTask: () => void
}

const Countdown = ({ selected, finishTask }: Props) => {

    const [time, setTime] = useState<number>(0)
    const [started, setStarted] = useState(false)

    useEffect(() => {
        if (selected?.time) {
            setTime(timeForSeconds(selected.time))
        }
    }, [selected])

    useEffect(() => {
        const timer = setInterval(() => {
            if (started) {
                if (time > 0) {
                    setTime(time - 1)
                } else {
                    finishTask()
                }
            }
        }, 1000)
        return () => clearInterval(timer)
    }, [started, time])


    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const minuteDozen = String(minutes).padStart(2, '0')
    const secondDozen = String(seconds).padStart(2, '0')


    return (
        <div className={styles.areaCountdown}>
            <div className={styles.countdown}>
                <span>{minuteDozen}</span>
                <span>:</span>
                <span>{secondDozen}</span>
            </div>
            <Button
                onClick={() => setStarted(!started)}>
                {started && time > 0 ?
                    "Pausar"
                    :
                    "Iniciar"
                }
            </Button>
        </div>
    )
}

export default Countdown