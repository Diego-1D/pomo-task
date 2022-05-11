import { NewTask } from '../../type/tasks'
import styles from './todolist.module.scss'
import Cards from './Cards'

interface Props {
    tasks: NewTask[],
    selectTask: (selectedTask: NewTask) => void
}

const index = ({ tasks, selectTask }: Props) => {
    return (
        <div className={styles.todoList}>
            <h2>Tarefas do dia:</h2>
            {
                tasks.map((item) => (
                    <Cards
                        selectTask={selectTask}
                        key={item.id}
                        {...item}
                    />
                ))
            }
        </div>
    )
}

export default index