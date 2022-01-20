import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RegularNoteComponent } from './notes/regular-note/regular-note.component';
import { ReminderComponent } from './notes/reminder/reminder.component';
import { TodoComponent } from './notes/todo/todo.component';
import { BookmarkComponent } from './notes/bookmark/bookmark.component';
import { UsernotesComponent } from './usernotes/usernotes.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    RegularNoteComponent,
    ReminderComponent,
    TodoComponent,
    BookmarkComponent,
    UsernotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right' 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
