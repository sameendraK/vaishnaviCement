import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { UspCardComponent } from './usp-card/usp-card.component';
import { MixersDynamicComponent } from './mixers-dynamic/mixers-dynamic.component';
import { DataService } from '../../../services/data.service';
import { FooterComponent } from '../../footer/footer.component';
import { WhatIsRMCComponent } from '../../what-is-rmc/what-is-rmc.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page-content',
  standalone: true,
  imports: [CommonModule, UspCardComponent, MixersDynamicComponent, FooterComponent, WhatIsRMCComponent],
  templateUrl: './main-page-content.component.html',
  styleUrl: './main-page-content.component.scss'
})
export class MainPageContentComponent implements OnInit, AfterViewInit {
  componentOnScreen: number = 0;
  #componentRef!: ComponentRef<MixersDynamicComponent>;
  currentMixerType!: any[];

  constructor(
    private vcr: ViewContainerRef,
    private dataService: DataService,
    private router: Router
  ) {

  }
  ngAfterViewInit(): void {
    // this.loadDynamicComponent(this.mixerInitial);
  }

  @ViewChild('dynamicComponent', { read: ViewContainerRef })
  dynamicComponent!: ViewContainerRef;

  mixerInitial: any[] = [];

  initialMix: boolean = true;

  ngOnInit(): void {
    this.mixerInitial = this.dataService.premiereMix;
    // this.loadDynamicComponent(this.mixerInitial);
  }

  ourVehiclesImages: any[] = [
    {
      imageName: "Truck 1",
      path: "../../../../assets/our-vehicles-truck-0.png"
    },
    {
      imageName: "Truck 2",
      path: "../../../../assets/our-vehicles-truck-1.png"
    },
    {
      imageName: "Truck 3",
      path: "../../../../assets/our-vehicles-truck-2.png"
    },
  ]

  runningTowardsSustanabilityLogos: any[] = [
    {
      name: "Hetero",
      path: "../../../../assets/hetero_logo.png"
    },
    {
      name: "NCC",
      path: "../../../../assets/ncc_logo.png"
    },
    {
      name: "Infosys",
      path: "../../../../assets/infosys_logo.png"
    },
    {
      name: "KEYSTONE",
      path: "../../../../assets/keystone_logo.png"
    },
    {
      name: "PRAGATI",
      path: "../../../../assets/pragati_logo.png"
    },
  ]

  uspCardDetails = [
    {
      img: '../../../../assets/speciality_concrete.png',
      heading: "Speciality Concrete",
      description: 'Performance-driven campaigns and transparent throughout – Entitledarts is the fastest growing digital transformation agency helping brands across the world through cutting edge digital marketing solution.'
    },
    {
      img: '../../../../assets/rmc_volume_calculator.png',
      heading: "RMC Volume Calculator",
      description: 'Performance-driven campaigns and transparent throughout – Entitledarts is the fastest growing digital transformation agency helping brands across the world through cutting edge digital marketing solution.'
    },
    {
      img: '../../../../assets/plant_locator.png',
      heading: "Plant Locator",
      description: 'Performance-driven campaigns and transparent throughout – Entitledarts is the fastest growing digital transformation agency helping brands across the world through cutting edge digital marketing solution.'
    },
    {
      img: '../../../../assets/site_visist.png',
      heading: "Site Visit",
      description: 'Performance-driven campaigns and transparent throughout – Entitledarts is the fastest growing digital transformation agency helping brands across the world through cutting edge digital marketing solution.'
    }
  ]

  mixersTypes: any[] = [
    {
      name: 'Premiere Mix',
      type: 'premiere'
    },
    {
      name: 'Residential Mix',
      type: 'residential'
    },
    {
      name: 'Micro Tech Mix',
      type: 'microTech'
    },
    {
      name: 'Special Products',
      type: 'special'
    },
  ]

  loadDynamicComponent(item: any) {
    this.initialMix = false;
    this.componentOnScreen++;
    // if (this.componentOnScreen % 2 === 0) {
    switch (item.type) {
      case "premiere":
        this.currentMixerType = this.dataService.premiereMix;
        break;
      case "residential":
        this.currentMixerType = this.dataService.residentialMix;
        break;
      case "microTech":
        this.currentMixerType = this.dataService.microTech;
        break;
      case "special":
        this.currentMixerType = this.dataService.special;
        break;
      default:
        null;
    }
    this.mixerInitial = this.currentMixerType;
    this.deleteExistingComponent();
    this.#componentRef = this.dynamicComponent.createComponent(MixersDynamicComponent);
    this.#componentRef.setInput('mixerDetails', this.currentMixerType);

    // this.dynamicComponent = this.vcr.createComponent(MixersDynamicComponent)
  }

  deleteExistingComponent() {
    this.#componentRef?.destroy();
  }

  enquireNowButtonClickHandler() {
    this.router.navigate(['contact'])
  }

}
