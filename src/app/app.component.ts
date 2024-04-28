import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// COMPONENTS
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MyspaceComponent } from './myspace/myspace.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, TodoComponent, AuthenticationComponent, MyspaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-books';
}
