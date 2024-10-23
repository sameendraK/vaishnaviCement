import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MainPageContentComponent } from './main-page-content/main-page-content.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderComponent, MainPageContentComponent, FooterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
