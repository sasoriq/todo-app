import {Component} from '@angular/core';
import {Todo} from './todo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})
export class AppComponent { 

  title = 'todo-app';
  lastId: number = 0;
  todos: Todo[] = [];
  public isShow = false;

  constructor() {
  }

  onAddTodo(todo: Todo) {
    this.addTodo(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.deleteTodoById(todo.id);
  }

  get allTodos() {
    return this.getAllTodos();
  }

  addTodo(todo: Todo) {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
  }

  deleteTodoById(id: number)  {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }  

  public jopa() {
    if (!this.isShow) {
      this.isShow = !this.isShow;
    }
  } 

  public hideAddComp() {
    this.isShow = !this.isShow;
  }

}
