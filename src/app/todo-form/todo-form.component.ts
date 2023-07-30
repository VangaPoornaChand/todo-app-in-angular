import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../model/todo.model';
import { v4 as uuidv4 } from 'uuid';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  title: string;

  constructor(private todoService: TodoService){
    this.title = '';
  }

  ngOnInit(): void {
    
  }

  handleAdd(){
    const newTodo = {
      id: uuidv4(),
      title: this.title,
      isCompleted: false,
      date: new Date()
    }
    this.todoService.addTodo(newTodo);
    this.title = '';
  }

}
