import { Component, OnInit, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements  OnChanges {

  title: string; 

  tasks: any[];

  @Input()
  todos: Todo[];

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter(); 
  
  public filterTodos: Todo[] = []

  constructor() { }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }

  Search() {
    this.filterTodos = this.todos.filter(res=>{
      return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
    });
  }

  ngOnChanges(): void {
    this.filterTodos = this.todos;
  }

}
