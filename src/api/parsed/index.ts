import { TodoModel } from '../../model/todos';
import { ApiResponse } from '../../types/api';
export const parsedTodoList = ({
  res,
}: {
  res: Array<ApiResponse.Todo>;
}): ApiResponse.ResponseData<Array<TodoModel>> => {
  if (!res) {
    return { data: [] };
  }
  return {
    data: res.map(item => ({
      id: item.id,
      completed: item.completed || false,
      userId: item.userId || 0,
      title: item.title || '',
    })),
    error: null,
  };
};

export const parsedTodo = ({
  res,
}: {
  res: ApiResponse.Todo;
}): ApiResponse.ResponseData<TodoModel> => {
  if (!res) {
    throw new Error('Invalid response');
  }
  return {
    data: {
      id: res.id,
      completed: res.completed || false,
      userId: res.userId || 0,
      title: res.title || '',
    },
    error: null,
  };
};
