import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'grid', component: GridLayoutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Redirect to home by default
  // other routes
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
