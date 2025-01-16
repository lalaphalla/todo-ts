import axiosInstance from './instance';

// Use Axios Instance to access and update API
const todoApi = {
  fetchTodo() {
    return axiosInstance.get('/todos');
  },
  addTodo(todo: {id:string, todo: string, completed: boolean}){
    return axiosInstance.post(`/todos`, todo)
  },
  delete(id: string) {
    return axiosInstance.delete(`/todos/${id}`);
  },
  update(id: string, updatedTodo: {todo: string, completed: boolean}){
    return axiosInstance.patch(`/todos/${id}`, updatedTodo)
  },
  randomTodo(){
    return axiosInstance.get('https://dummyjson.com/todos/random')
  }
};

export default todoApi;
