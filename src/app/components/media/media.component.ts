import { Component, OnInit } from '@angular/core';
import { MediaCardComponent } from './media-card/media-card.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [MediaCardComponent],
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss'
})
export class MediaComponent implements OnInit {

  cards: any[] = [];
  constructor(private dataService: DataService) {

  }
  ngOnInit() {
    this.cards = this.dataService.mediaItems;
  }

}
