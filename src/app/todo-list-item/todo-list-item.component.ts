import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  @Input() todo: Todo;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();
  
  constructor() { }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }

  ngOnInit(): void {
  }

}
