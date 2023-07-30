import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../model/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{

  todos: TodoModel[];

  constructor(private todoService: TodoService){
    this.todos = [];
  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(
      todos => {
        this.todos = todos;
      }
    )
  }

  changeTodoStatus = (todo: TodoModel)=>{
    this.todoService.changeStatus(todo);
  }

  deleteTodo(todo: TodoModel){
    this.todoService.deleteTodo(todo);
  }

}
