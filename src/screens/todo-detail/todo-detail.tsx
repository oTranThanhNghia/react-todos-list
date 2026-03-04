import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TodosApi from '../../api/todos-api';
import { TodoModel } from '../../model/todos';
import './todo-detail.css';

const TodoDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<TodoModel | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const fetchTodo = async () => {
    setLoading(true);
    const response = await TodosApi.getTodoById(Number(id));
    setTodo(response.data);
    setLoading(false);
  };

  const updateTodo = async (data: TodoModel) => {
    setSaving(true);
    await TodosApi.updateTodo(data);
    setSaving(false);
  };

  useEffect(() => {
    if (!id) return;
    fetchTodo();
  }, [id]);

  const handleSave = useCallback(async () => {
    if (!todo) return;
    updateTodo(todo);
    navigate('/');
  }, [navigate, todo]);

  return (
    <div className="todo-detail-container">
      <button className="btn-back" onClick={() => navigate('/')}>
        ← Back
      </button>

      {loading ? (
        <p className="loading">Loading...</p>
      ) : todo ? (
        <div className="todo-detail-card">
          <h2 className="detail-heading">Edit Todo</h2>

          <div className="form-group">
            <label className="form-label" htmlFor="todo-title">
              Title
            </label>
            <input
              id="todo-title"
              className="form-input"
              type="text"
              value={todo.title ?? ''}
              onChange={e => setTodo({ ...todo, title: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="todo-status">
              Status
            </label>
            <select
              id="todo-status"
              className="form-select"
              value={todo.completed ? 'done' : 'todo'}
              onChange={e => setTodo({ ...todo, completed: e.target.value === 'done' })}
            >
              <option value="todo">Todo</option>
              <option value="done">Done</option>
            </select>
          </div>

          <div className="detail-meta">
            <div className="detail-meta-row">
              <span className="detail-label">ID</span>
              <span className="detail-value">{todo.id}</span>
            </div>
            <div className="detail-meta-row">
              <span className="detail-label">User ID</span>
              <span className="detail-value">{todo.userId}</span>
            </div>
          </div>

          <button className="btn-save" onClick={handleSave} disabled={saving}>
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
      ) : (
        <p className="loading">Todo not found.</p>
      )}
    </div>
  );
};

export default TodoDetail;
