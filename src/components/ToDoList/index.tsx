import { NewTask } from '../../type/tasks'
import styles from './todolist.module.scss'
import Cards from './Cards'
import React, { useState } from 'react'
import Form from '../Form'
import Button from '../Button'

interface Props {
    tasks: NewTask[],
    selectTask: (selectedTask: NewTask) => void
    setTasks: React.Dispatch<React.SetStateAction<NewTask[]>>
}

const ToDoList = ({ tasks, selectTask, setTasks }: Props) => {
    const [openModal, setOpenModal] = useState(false)

    const toggle = () => {
        setOpenModal(!openModal)
    }

    return (
        <div className={styles.todolist}>
            <div className={styles.header}>
                <h2>Tarefas do dia:</h2>
                <Button onClick={toggle}>
                    + tarefa
                </Button>
                {
                    openModal && <Form setTasks={setTasks} onClose={toggle} />
                }
            </div>
            {
                tasks.length === 0 &&
                <div className={styles.message}>
                    <label>Não há nenhuma tarefa</label>
                </div>
            }
            <>
                {
                    tasks.map((item) => (
                        <Cards
                            selectTask={selectTask}
                            key={item.id}
                            {...item}
                        />
                    ))
                }

            </>
        </div>
    )
}

export default ToDoList