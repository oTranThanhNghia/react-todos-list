import { TodoModel } from '../model/todos';
import { ApiResponse } from '../types/api';
import clientRequest from './common/request';
import { parsedTodo, parsedTodoList } from './parsed';

const getTodoList = async () => {
  const response = await clientRequest.request<Array<ApiResponse.Todo>>({
    url: '/todos',
    method: 'GET',
  });

  return parsedTodoList({ res: response.data });
};

const getTodoById = async (id: number) => {
  const response = await clientRequest.request<ApiResponse.Todo>({
    url: `/todos/${id}`,
    method: 'GET',
  });

  return parsedTodo({ res: response.data });
};

const createTodo = async (todo: TodoModel) => {
  await clientRequest.request<ApiResponse.Todo>({
    url: '/todos',
    method: 'POST',
    data: todo,
  });

  return;
};

const updateTodo = async (todo: TodoModel) => {
  await clientRequest.request<ApiResponse.Todo>({
    url: `/todos/${todo.id}`,
    method: 'PUT',
    data: todo,
  });

  return;
};

const deleteTodo = async (id: number) => {
  await clientRequest.request<ApiResponse.Todo>({
    url: `/todos/${id}`,
    method: 'DELETE',
  });

  return;
};

const TodosApi = {
  getTodoList,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};

export default TodosApi;
