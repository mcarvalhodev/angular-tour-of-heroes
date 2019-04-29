import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {TODOS} from './mock-todos';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  todos: Todo[] = [];

  lastUsedId: number = 0;

  constructor() {
  }

  getTodos(): Todo[] {
    return TODOS;
  }

  addTodo(todo: Todo) {
    if (!todo.id) {
      todo.id =  ++this.lastUsedId;
    }
    this.todos.push(todo);
    return this;
  }

  toggle(todo: Todo) {
    
  }

  removeTodo(todo: Todo) {
    this.todos =  this.todos.filter(t => t.id !== todo.id);
  }
}
