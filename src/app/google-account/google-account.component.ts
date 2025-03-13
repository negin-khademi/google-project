import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-google-account',
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './google-account.component.html',
  styleUrl: './google-account.component.scss',
})
export class GoogleAccountComponent {
  profileImage = 'profile.jpg';
}
