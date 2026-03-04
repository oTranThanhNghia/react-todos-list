import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TodosApi from '../../api/todos-api';
import { TodoModel } from '../../model/todos';
import TodoItem from '../../components/todo-item';
import './list.css';

function TodoList() {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState<TodoModel[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTodoList = async () => {
    setLoading(true);
    const response = await TodosApi.getTodoList();
    setTodoList(response.data);
    setLoading(false);
  };
  const deleteTodo = async (id: number) => {
    await TodosApi.deleteTodo(id);
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  const handleUpdate = (id: number) => {
    navigate(`/todos/${id}`);
  };

  const handleDelete = (id: number) => {
    deleteTodo(id);
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        // if the list is too long, we should use pagination and use the virtual list (same as flatlist in react native)
        todoList.map(todo => (
          <div className="todo-item" key={todo.id} onClick={() => navigate(`/todos/${todo.id}`)}>
            <TodoItem data={todo} />
            <div className="todo-actions">
              <button
                className="btn btn-update"
                onClick={e => {
                  e.stopPropagation();
                  handleUpdate(todo.id);
                }}
              >
                Update
              </button>
              <button
                className="btn btn-delete"
                onClick={e => {
                  handleDelete(todo.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TodoList;
