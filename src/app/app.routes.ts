import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { RemedyDetailComponent } from './remedy-detail/remedy-detail.component';

const routes: Routes = [
  { path: 'remedyDetail/:id', component: RemedyDetailComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'home', component: HomeComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutesModule {}
