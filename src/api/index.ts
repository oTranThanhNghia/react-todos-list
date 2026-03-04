import { TodoModel } from '../model/todos';
import { ResponseData } from './common/request';
import { parsedTodo } from './parsed';

const fetchTodoList = async (): Promise<ResponseData<TodoModel>> => {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const response = await fetch(url);
  const data = await response.json();
  const responseData: ResponseData<TodoModel> = {
    data,
    error: null,
  };
  const paredObject = parsedTodo({ res: responseData });
  return responseData;
};
