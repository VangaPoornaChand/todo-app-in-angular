import { Injectable } from '@angular/core';
import { TodoModel } from '../model/todo.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: TodoModel[];

  constructor() {
    this.todos = [
      {
        id: '111',
        title: 'Learn Angular',
        date: new Date(),
        isCompleted: false
      },
      {
        id: '222',
        title: 'Learn Python',
        date: new Date(),
        isCompleted: true
      }
    ]
  }

  getTodos = () => {
    return of(this.todos)
  }

  addTodo = (todo: TodoModel) => {
    this.todos.push(todo);
  }

  changeStatus = (todo:TodoModel) =>{
    this.todos.map(singleTodo => {
      if(todo.id === singleTodo.id){
        todo.isCompleted = !todo.isCompleted
      }
    })
  }

  deleteTodo(todo: TodoModel){
    const index = this.todos.findIndex(t => t.id === todo.id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

}