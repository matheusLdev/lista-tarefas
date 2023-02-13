import { ITask } from '../../interface';
import './card.css';

interface TaskProps {
    task: ITask,
    finishedTask(finishedTaskById : number) : void
}

export function Card({task, finishedTask} : TaskProps) {
    return (
        <div className="d-flex align-items-center justify-content-between text-bg-primary w-75 mb-3 p-2 rounded">
            <span className="text-break">{task.nameTask}</span>
            <button id="delete" type="button" className="btn btn-outline-light shadow" onClick={() => finishedTask(task.id)}>X</button>
        </div>
    )
}