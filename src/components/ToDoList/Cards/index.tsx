import { NewTask } from '../../../type/tasks'
import styles from './cards.module.scss'

interface Props extends NewTask {
    selectTask: (selectedTask: NewTask) => void
}

const Cards = ({ task, time, selected, completed, id, selectTask }: Props) => {
    return (
        <div
            className={`${styles.cards} ${selected ? styles.activeCard  : ''}`}
            onClick={() => !completed && selectTask({
                task,
                time,
                selected,
                completed,
                id
            })}
        >
            <label>{task}</label>
            <span>{time}</span>
        </div>
    )
}

export default Cards