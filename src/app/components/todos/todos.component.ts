import { Component } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  number: number = 51;
  localItem: string | null = null;
  todos: Todo[] = [];
  isClicked:boolean = false;

  onClicked(){
    this.isClicked = true;
  }

  constructor(){
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }


  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
