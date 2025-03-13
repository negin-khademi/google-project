import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatMenuModule } from '@angular/material/menu';
import { faTh } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-app-launcher',
  imports: [MatMenuModule, FontAwesomeModule, FaIconComponent],
  templateUrl: './app-launcher.component.html',
  styleUrl: './app-launcher.component.scss',
})
export class AppLauncherComponent {
  faTh = faTh;
}
