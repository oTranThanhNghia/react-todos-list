import {ResponseData} from './common/request'
import { parsedTodo } from './parsed';

const fetchTodoList = async (): ResponseData => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const response = await fetch(url);
    const data = response.json();
    const responseData: ResponseData = {
        data
    }
    const paredObject= parsedTodo(responseData);
}
