import Countdown from './components/Countdown';
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import styles from './styles/app.module.scss'
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
      { /*  <Form setTasks={setTasks} />*/}
      <div className={styles.wrapper}>
        <Countdown
          selected={selected}
          finishTask={finishTask}
        />
        <ToDoList
          tasks={tasks}
          selectTask={selectTask}
        />
      </div>
    </div >
  );
}

export default App;
