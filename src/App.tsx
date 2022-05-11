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

  return (
    <div className={styles.app}>
      <Form setTasks={setTasks}/>
      <ToDoList
        tasks={tasks}
        selectTask={selectTask}
      />
      <Countdown />
    </div>
  );
}

export default App;
