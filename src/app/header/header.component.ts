import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { faTh } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatDividerModule, FaIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  faTh = faTh;
}
