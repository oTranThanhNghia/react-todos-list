import { TodoModel } from '../model/todos';

interface Props {
  data: TodoModel;
}

const TodoItem = ({ data }: Props) => {
  return (
    <div className="todo-info">
      <div className={`todo-title ${data.completed ? 'completed' : ''}`}>{data.title}</div>
      <div className="todo-meta">
        ID: {data.id} &nbsp;·&nbsp; User: {data.userId} &nbsp;·&nbsp;
        <span className={`todo-badge ${data.completed ? 'done' : 'pending'}`}>
          {data.completed ? 'Done' : 'Todo'}
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
