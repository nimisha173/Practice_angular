import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviecomponentComponent } from './moviecomponent/moviecomponent.component';
import { LoginComponent } from './moviecomponent/login/login.component';
import { RegisterComponent } from './moviecomponent/register/register.component';
import { UpcomingMoviesComponent } from './moviecomponent/upcoming-movies/upcoming-movies.component';
import { BookTicketComponent } from './moviecomponent/book-ticket/book-ticket.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MoviecomponentComponent,
    LoginComponent,
    RegisterComponent,
    UpcomingMoviesComponent,
    BookTicketComponent
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
