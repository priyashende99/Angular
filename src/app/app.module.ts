import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { BasicPageComponent } from './components/basic-page/basic-page.component';
import { HeaderComponent } from './components/basic-page/header/header.component';
import { SidenavComponent } from './components/basic-page/sidenav/sidenav.component';
import { MainComponent } from './components/basic-page/main/main.component';
import { FooterComponent } from './components/basic-page/footer/footer.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { FirstComponent } from './components/calculater/first/first.component';
import { SecondComponent } from './components/calculater/second/second.component';
import { ShapesComponent } from './components/shapes/shapes/shapes.component';
import { ShapesFirstComponent } from './components/shapes/shapes-first/shapes-first.component';
import { ShapesSecondComponent } from './components/shapes/shapes-second/shapes-second.component';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
    BasicPageComponent,
    HeaderComponent,
    SidenavComponent,
    MainComponent,
    FooterComponent,
    ParentComponent,
    ChildComponent,
    FirstComponent,
    SecondComponent,
    ShapesComponent,
    ShapesFirstComponent,
    ShapesSecondComponent,
    TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
