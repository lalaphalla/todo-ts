import { FormEvent, useRef } from 'react';
export type Task = {
  id: number;
  title: string;
  description: string;
};

interface NewTaskProps { 
  taskProp: Task | null;
  onAddTask: (title: string, description: string) => void;
}
export const TaskForm = ({ taskProp, onAddTask }: NewTaskProps) => {
  const task = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);

  if (taskProp) {
    task.current!.value = taskProp.title;
    description.current!.value = taskProp.description;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputTask = task.current!.value;
    const inputDescription = description.current!.value;

    onAddTask(inputTask, inputDescription);
  };
  const handleReset = () => {
    task.current!.value = '';
    description.current!.value = '';
    taskProp = null;
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="task">task</label>
        <input type="text" id="task" ref={task} />
      </p>
      <p>
        <label htmlFor="description">description</label>
        <input type="text" id="description" ref={description} />
      </p>
      <button>Add Task</button>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
};
