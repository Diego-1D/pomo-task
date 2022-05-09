import styles from './styles/app.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <form className={styles.formulario}>
        <h2>Organizador de tarefas</h2>
        <input placeholder='Escreva o que irá fazer hoje?' />
        <input placeholder='Quanto precisará?' />
        <button>Criar tarefa</button>
      </form>
      <div className={styles.cards}>
        <h2>Tarefas do dia:</h2>
        <div>
          <label>Geometria</label>
          <span>00:00:00</span>
        </div>
      </div>
    </div>
  );
}

export default App;
