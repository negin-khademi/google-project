import { CommonModule } from '@angular/common'; // اضافه کردن CommonModule
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // وارد کردن ماژول FontAwesome
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ProfileButtonComponent } from '../shared/profile-button/profile-button.component';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'; // وارد کردن آیکن مداد

@Component({
  selector: 'app-google-account',
  imports: [
    MatButtonModule,
    MatMenuModule,
    ProfileButtonComponent,
    FontAwesomeModule,
    CommonModule,
  ],
  templateUrl: './google-account.component.html',
  styleUrl: './google-account.component.scss',
})
export class GoogleAccountComponent {
  profileImage = 'profile.jpg';
  faPencilAlt = faPencilAlt;
}
