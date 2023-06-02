import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo: Todo = {} as Todo;
  @Input() i: number = 0;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbBox: EventEmitter<Todo> = new EventEmitter();

  onClick(todo:Todo){
    this.todoDelete.emit(todo);
    // console.log("Click method Called");
    
  }

  onCheckBoxClick(todo:Todo){
    console.log(todo);
    this.todoCheckbBox.emit(todo);
    console.log(todo);
  }
}
