import { Component } from '@angular/core';
import { FOOTER_LINKS,FOOTER_POLICIES_LINKS } from '../shared/data';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerLinks = FOOTER_LINKS;
  footerPoliciesLinks = FOOTER_POLICIES_LINKS;
}
