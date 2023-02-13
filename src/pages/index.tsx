import {useState} from 'react';
import { ITask } from '../interface';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Card} from '../components/Card';

export function Index() {
  const cleanInput = document.getElementById("task-input") as HTMLInputElement;
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleAddTask() : void {
    if(taskName === ""){
      toast.error("Digite alguma tarefa");
    } else {
      const idNumber = (num: number) => Math.floor(Math.random() * num);
      const newTask = {
        id: idNumber(1000),
        nameTask: taskName,
      };
      setTasks(prevTask => [...prevTask, newTask]);
      toast.success("Tarefa cadastrada com sucesso!");
      cleanInput.value = "";
      setTaskName("");
    }
  }
  function clear() : void{
    cleanInput.value = "";
    setTaskName("");
  }
  
  function finishedTask(finishedTaskById : number) : void{
    setTasks(tasks.filter((taskId) => taskId.id !== finishedTaskById));
    toast.success("Parabéns pela conclusão dessa tarefa.");
  }
  return (
    <>
      <main className="container">
        
        <ToastContainer
          autoClose={3000}
          pauseOnHover={false}
          theme="colored"
        />
        
        <section>
          <h1 className="text-edition">Minhas tarefas diárias</h1>
          <div id="container-input" className="input-group mb-4">
            <input 
              id="task-input"
              type="text" 
              className="form-control"
              placeholder="Digite sua Tarefa:"
              onChange={e => setTaskName(e.target.value)}
            />
            <button id="add" className="btn btn-outline-primary" type="button" onClick={handleAddTask}>
              Adicionar
            </button>
            <button id="reset" className="btn btn-outline-primary" type="button" onClick={clear}>Limpar
            </button>
          </div>
          
          {tasks.map((taskName, key) => (
              <Card 
                key={key}
                task={taskName}
                finishedTask={finishedTask}   
              />
          ))}
        </section>
        
        <footer>
          <p className="text-edition">Todos os direitos reservados - MathGo Dev 2023</p>
        </footer>
      </main> 
    </>
  )
}
