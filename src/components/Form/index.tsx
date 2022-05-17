import React, { useState } from 'react'
import { NewTask } from '../../type/tasks'
import styles from './form.module.scss'
import { v4 as uuidv4 } from 'uuid'
import Button from '../Button'

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<NewTask[]>>,
    onClose: () => void
}

const Form = ({ onClose, setTasks }: Props) => {

    const [task, setTask] = useState('')
    const [time, setTime] = useState('00:00:00')

    function addTask (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        let errors: string[] = []

        if (task === '') {
            errors.push('Descreva a tarefa do dia!')
        }
        if (time === '00:00:00') {
            errors.push('Inserir o tempo necessário para o estudo!')
        }
        if(errors.length > 0){
            alert(errors.join('\n'))
        } else {
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
            setTime('00:00:00')
            onClose()
        }
    }

    const handleOutsideClick = () => {
        onClose()
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={addTask}>
                <div className={styles.btnClose}>
                    <button type='button' onClick={handleOutsideClick}>
                        X fechar
                    </button>
                </div>
                <h2>Tarefa do dia</h2>
                <input
                    placeholder='Escreva o que irá fazer hoje?'
                    type='text'
                    name='task'
                    value={task}
                    onChange={event => setTask(event.target.value)}
                />
                <h2>Tempo</h2>
                <input
                    placeholder='Quanto tempo precisará?'
                    type='time'
                    step='1'
                    name='time'
                    value={time}
                    onChange={event => setTime(event.target.value)}
                    id='time'
                    min='00:00:00'
                    max='03:00:00'
                    required
                />
                <Button type='submit'>
                    Criar Tarefa
                </Button>
            </form>
        </div>
    )
}

export default Form