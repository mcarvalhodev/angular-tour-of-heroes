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

  addTodo(todo: string): void {
    this.todoService.addTodo({id: this.todos.length + 1, title: todo, done: false});
  }

  toggle(todo: Todo) {
    this.todoService.toggle(todo);
  }

  removeTodo(todo: Todo) {
    this.todoService.removeTodo(todo);
  }
}
