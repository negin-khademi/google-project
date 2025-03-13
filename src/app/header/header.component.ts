import { AppLauncherComponent } from '../app-launcher/app-launcher.component';
import { Component } from '@angular/core';
import { GoogleAccountComponent } from '../google-account/google-account.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-header',
  imports: [
    MatButtonModule,
    MatButtonModule,
    MatDividerModule,
    GoogleAccountComponent,
    AppLauncherComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
