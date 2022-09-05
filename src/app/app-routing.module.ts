import { NgModule } from '@angular/core';
import { RouteFinderComponent } from './components/route-finder/route-finder.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: RouteFinderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
