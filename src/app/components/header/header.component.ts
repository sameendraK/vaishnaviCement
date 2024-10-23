import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentActiveItem: string = 'home';

  constructor(
    private router: Router
  ) {

  }

  headerNavItems: any[] = [
    {
      title: "Home",
      type: 'nav',
      route: ''
    },
    {
      title: "About Us",
      type: 'nav',
      route: 'about'

    },
    {
      title: "Services",
      type: 'nav',
      route: 'services'

    },
    {
      title: "Media",
      type: 'nav',
      route: 'media'

    },
    {
      title: "Contact Us",
      type: 'nav',
      route:'contact'

    },
    {
      title: "Download Brochure",
      type: 'button'
    },
  ]

  headerNav(item: any) {
    // if (item.route != '/')
    this.router.navigate([item.route]);
    this.setCurrentActiveItem(item);
    // else
    // this.router.navigate(['/']);
  }
  setCurrentActiveItem(item: any) {
    this.currentActiveItem = item.route;
  }

}
