import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { AboutComponent } from './components/about/about.component';
import { BasicPageComponent } from './components/basic-page/basic-page.component';
import { ParentComponent } from './components/parent/parent.component';
import { FirstComponent } from './components/calculater/first/first.component';
import { SecondComponent } from './components/calculater/second/second.component';
import { ShapesComponent } from './components/shapes/shapes/shapes.component';

const routes: Routes = [
  { path: '', component:TodosComponent },
  { path: 'about', component:AboutComponent },
  { path: 'basicPage', component:BasicPageComponent},
  { path: 'basicPage/:id', component: BasicPageComponent},
  { path: 'communication', component:ParentComponent},
  { path: 'calculator-first', component:FirstComponent},
  { path: 'calculator-second', component:SecondComponent},
  { path: 'shapes', component:ShapesComponent },
  { path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
