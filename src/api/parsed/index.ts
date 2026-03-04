import { TodoModel } from '../../model/todos'
import {ResponseData} from '../common/request'
export const parsedTodo = ({res}: {res: ResponseData}): TodoModel=>{

    // valid data
    // if(res.data typeof  ){

    // }

    return {
        id: res.data.id,
        completed: res.data.completed,
        userId: res.data.userId,
        title: res.data.title,
    }
}
