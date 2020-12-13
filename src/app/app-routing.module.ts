import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './misc/home/home.component';
import {BaseComponent} from './questions/base/base.component';
import {ResultComponent} from './questions/result/result.component';
import {InfoComponent} from './misc/info/info.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'start', component: BaseComponent },
  { path: 'result', component: ResultComponent },
  { path: 'info', component: InfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
