import { Component, Input } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-profile-button',
  imports: [MatMenuModule],
  templateUrl: './profile-button.component.html',
  styleUrl: './profile-button.component.scss',
})
export class ProfileButtonComponent {
  @Input() width: string = '35px'; // مقدار پیش‌فرض عرض
  @Input() height: string = '35px';
}
