import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{ FooterComponent } from './footer/footer.component'
import{ HeaderComponent } from './header/header.component'
import{ MenuComponent } from './menu/menu.component'
import{ HomeComponent } from './home/home.component'
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  state,
  keyframes
} from "@angular/animations";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    HeaderComponent,
    RouterOutlet,
    FooterComponent,
    MenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger("listAnimation", [
      transition("* => *", [
        // each time the binding value changes
        query(
          ":leave",
          [stagger(100, [animate("0.5s", style({ opacity: 0 }))])],
          { optional: true }
        ),
        query(
          ":enter",
          [
            style({ opacity: 0 }),
            stagger(100, [animate("0.5s", style({ opacity: 1 }))])
          ],
          { optional: true }
        )
      ])
    ]),
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1, 'overflow-x': 'hidden'}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    ),
    trigger('slideIn', [
      state('*', style({ 'overflow-y': 'hidden' })),
      state('void', style({ 'overflow-y': 'hidden' })),
      transition('* => void', [
        style({ height: '*' }),
        animate(250, style({ height: 0 }))
      ]),
      transition('void => *', [
        style({ height: '0' }),
        animate(250, style({ height: '*' }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'movie-catalog';
}
