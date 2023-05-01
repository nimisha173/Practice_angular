import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookTicketComponent } from './moviecomponent/book-ticket/book-ticket.component';
import { LoginComponent } from './moviecomponent/login/login.component';
import { RegisterComponent } from './moviecomponent/register/register.component';
import { UpcomingMoviesComponent } from './moviecomponent/upcoming-movies/upcoming-movies.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent },
  {path: 'register', component:RegisterComponent},
  {path: 'upcoming-movies', component:UpcomingMoviesComponent},
  {path:'book-ticket',component:BookTicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
