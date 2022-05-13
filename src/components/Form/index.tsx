import React, { useState } from 'react'
import { NewTask } from '../../type/tasks'
import styles from './form.module.scss'
import { v4 as uuidv4 } from 'uuid'
import Button from '../Button'

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<NewTask[]>>
}

const Form = ({ setTasks}: Props) => {

    const [task, setTask] = useState('')
    const [time, setTime] = useState('00:00')

    function addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setTasks(previousTask =>
            [
                ...previousTask,
                {
                    task,
                    time,
                    selected: false,
                   completed: false,
                    id: uuidv4()
                }
            ])
        setTask('')
        setTime('00:00')
    }

    return (
        <form className={styles.form} onSubmit={addTask}>
            <h2>Organizador de tarefas</h2>
            <input
                placeholder='Escreva o que irá fazer hoje?'
                type='text'
                name='task'
                value={task}
                onChange={event => setTask(event.target.value)}
                required
            />
            <input
                placeholder='Quanto tempo precisará?'
                type='time'
                step='1'
                name='time'
                value={time}
                onChange={event => setTime(event.target.value)}
                required
                id='time'
                min='00:00:00'
                max='03:00:00'
            />
            <Button type='submit'>
                Criar Tarefa
            </Button>
        </form>
    )
}

export default Form