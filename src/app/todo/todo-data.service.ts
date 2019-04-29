import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {TODOS} from './mock-todos';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  todos: Todo[] = [];

  constructor() {
  }

  getTodos(): Todo[] {
    return TODOS;
  }

  addTodo(todo: Todo): void {
    TODOS.push(todo);
  }

  toggle(todo: Todo) {
    
  }

  removeTodo(todo: Todo) {
    
  }
}
