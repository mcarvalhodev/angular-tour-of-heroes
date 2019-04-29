import {Component, OnInit} from '@angular/core';
import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[];

  constructor(public todoService: TodoDataService) {
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todos = this.todoService.getTodos();
  }

  onAddTodo(todo: Todo): void {
    this.todoService.addTodo(todo);
  }

  toggle(todo: Todo) {
    this.todoService.toggle(todo);
  }

  removeTodo(todo: Todo) {
    this.todoService.removeTodo(todo);
  }
}
