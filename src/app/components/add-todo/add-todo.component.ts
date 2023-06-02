import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

    title:string = '';
    desc:string = '';

    onSubmit(){
      const todo = {
        sno: 8,
        title: this.title,
        desc: this.desc,
        active: true
      }
      this.todoAdd.emit(todo);
    }
}
