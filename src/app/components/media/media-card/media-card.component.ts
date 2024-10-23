import { Component, Input } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.scss'
})
export class MediaCardComponent {
  constructor(
    private dataService: DataService
  ) {

  }

  @Input()
  cards: any[] = [];

}
