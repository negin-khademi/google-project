import { AppLauncherComponent } from '../app-launcher/app-launcher.component';
import { Component } from '@angular/core';
import { GoogleAccountComponent } from '../google-account/google-account.component';
import { LoginSignupComponent } from '../login-signup/login-signup.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-header',

  imports: [
    MatButtonModule,
    MatButtonModule,
    MatDividerModule,
    GoogleAccountComponent,
    AppLauncherComponent,
    // MatDialogModule,
  ],

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(LoginSignupComponent);
  }
}
