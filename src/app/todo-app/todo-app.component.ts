import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {

  lastId: number = 0;
   
  @Input()
  todos: Todo[];
  
  @Output()
  show: EventEmitter<Todo> = new EventEmitter(); 

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();  

  @Output() 
  add: EventEmitter<Todo> = new EventEmitter();  
  
  constructor() { }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }  

  showComponent() {
    this.show.emit();
  }

  ngOnInit(): void {
  }

}
