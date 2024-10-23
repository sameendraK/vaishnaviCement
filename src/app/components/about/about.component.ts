import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  missionListItems: any[] = [
    {
      description: "To deliver top-grade ready-mix concrete and cement mixers that meet the highest industry standards."
    },
    {
      description:
        "To ensure timely and cost - effective solutions tailored to the specific needs of our clients."
    },
    {
      description: "To foster long - term relationships with customers by prioritizing quality, service, and trust."
    },
    {
      description: "To adopt sustainable practices that minimize environmental impact and promote eco - friendly construction."
    }
  ]
}
