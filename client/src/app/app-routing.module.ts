import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookmarkComponent } from './notes/bookmark/bookmark.component';
import { RegularNoteComponent } from './notes/regular-note/regular-note.component';
import { ReminderComponent } from './notes/reminder/reminder.component';
import { TodoComponent } from './notes/todo/todo.component';
import { UsernotesComponent } from './usernotes/usernotes.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'usernotes', component: UsernotesComponent},
  {path: 'regularnote', component: RegularNoteComponent},
  {path: 'reminder', component: ReminderComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'bookmark', component: BookmarkComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
