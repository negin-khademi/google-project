import {
  faCamera,
  faMicrophone,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@Component({
  selector: 'app-body',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
    FaIconComponent,
    MatAutocompleteModule
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {
  faCamera = faCamera;
  faMicrophone = faMicrophone;
  faSearch = faSearch;
}