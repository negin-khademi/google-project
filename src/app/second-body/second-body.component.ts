import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-second',
  imports: [SearchComponent],
  templateUrl: './second-body.component.html',
  styleUrl: './second-body.component.scss',
})
export class secondBodyComponent {}
