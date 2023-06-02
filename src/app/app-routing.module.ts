import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { AboutComponent } from './components/about/about.component';
import { BasicPageComponent } from './components/basic-page/basic-page.component';

const routes: Routes = [
  { path: '', component:TodosComponent },
  { path: 'about', component:AboutComponent },
  { path: 'basicPage', component:BasicPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
