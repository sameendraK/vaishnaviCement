import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-usp-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usp-card.component.html',
  styleUrl: './usp-card.component.scss'
})
export class UspCardComponent implements OnInit, OnChanges {


  @Input()
  cardDetails: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {

  }

}
