import {
  faCamera,
  faMicrophone,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-search',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
    FaIconComponent,
    MatAutocompleteModule,
    MatTooltipModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  faCamera = faCamera;
  faMicrophone = faMicrophone;
  faSearch = faSearch;
}
