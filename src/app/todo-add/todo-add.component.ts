import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  newTodo: Todo = new Todo();  

  @Input() show: boolean;  

  storedTheme: string = localStorage.getItem('theme-color');
 // @Input()
 // show: boolean
  
  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  @Input() 
  showComponent = new EventEmitter(); 

  @Output() 
  hideAdd: EventEmitter<Todo> = new EventEmitter();
  

  constructor() {
  }

  addTodo() {
    if(this.newTodo.title) {
      this.add.emit(this.newTodo);
      this.newTodo = new Todo();
    }
  }

  hideComponent() {
    this.hideAdd.emit();
  } 

 

  setTheme(theme) {
    localStorage.setItem('theme-color', theme);
    this.storedTheme = localStorage.getItem('theme-color');
  }

  ngOnInit(): void {
  }

}
