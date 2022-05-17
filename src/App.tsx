import Countdown from './components/Countdown';
import ToDoList from './components/ToDoList';
import './styles/global.scss';
import styles from './styles/app.module.scss';
import { NewTask } from './type/tasks';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState<NewTask[] | []>([])
  const [selected, setSelected] = useState<NewTask>()

  function selectTask(selectedTask: NewTask) {
    setSelected(selectedTask)
    setTasks(previousTask => previousTask.map(tasks => ({
      ...tasks,
      selected: tasks.id === selectedTask.id ? true : false
    })))
  }

  function finishTask() {
    if (selected) {
      setSelected(undefined)
      setTasks(previousTask => previousTask.map(tasks => {
        if (tasks.id === selected.id) {
          return {
            ...tasks,
            selected: false,
            completed: true
          }
        }
        return tasks
      }))
    }
  }

  return (
    <div className={styles.app}>
      <div className={styles.title}>
        <h1 >Organizador de estudos</h1>
      </div>
      <div className={styles.wrapper}>
        <Countdown
          selected={selected}
          finishTask={finishTask}
        />
        <ToDoList
          tasks={tasks}
          selectTask={selectTask}
          setTasks={setTasks}
        />
      </div>
    </div >
  );
}

export default App;
