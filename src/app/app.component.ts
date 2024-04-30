import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{ FooterComponent } from './footer/footer.component'
import{ HeaderComponent } from './header/header.component'
import{ MenuComponent } from './menu/menu.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent,
    MenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'movie-catalog';
}
