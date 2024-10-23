import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-mixers-dynamic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mixers-dynamic.component.html',
  styleUrl: './mixers-dynamic.component.scss'
})
export class MixersDynamicComponent {

  // mixerDetails = input([]);

  @Input()
  mixerDetails!: any[]

}
