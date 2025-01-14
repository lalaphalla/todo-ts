import axiosInstance from './instance';

const todoApi = {
  fetchTodo() {
    return axiosInstance.get('/todos');
  },
  delete(id: number) {
    return axiosInstance.delete(`/todos/${id}`);
  },
  update(id: number, updatedTodo: {todo: string, completed: boolean}){
    return axiosInstance.put(`/todos/${id}`, updatedTodo)
  }
};

export default todoApi;
