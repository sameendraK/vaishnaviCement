import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-dynamic',
  standalone: true,
  imports: [],
  templateUrl: './services-dynamic.component.html',
  styleUrl: './services-dynamic.component.scss'
})
export class ServicesDynamicComponent {
  @Input()
  detailsToLoad!: any;
}
