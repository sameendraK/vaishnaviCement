import { Component, OnInit } from '@angular/core';
import { WhatIsRMCComponent } from '../what-is-rmc/what-is-rmc.component';
import { DataService } from '../../services/data.service';
import { ServicesDynamicComponent } from './services-dynamic/services-dynamic.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MailService } from '../../services/mail.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule, WhatIsRMCComponent, ServicesComponent, ServicesDynamicComponent, ReactiveFormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  serviceNavItems: any[] = [];
  servicesDetailsList: any[] = [];
  currentItem: any;
  currentDetails: any;
  currentActiveItem: string = 'residential';
  formGroup!: FormGroup
  constructor(
    private dataService: DataService,
    private fb: FormBuilder,
    private mailService: MailService
  ) {
    this.serviceNavItems = this.dataService.servicesNavItems;
  }

  ngOnInit(): void {
    console.log(this.serviceNavItems);
    this.servicesDetailsList = this.dataService.servicesDetailsList;
    this.currentDetails = this.servicesDetailsList[0];
    this.formGroup = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        message: ['', [Validators.required]],
      })
  }

  servicesNavItemClickHandler(item: any) {
    this.currentDetails = this.servicesDetailsList.find((o: any) => {
      return o.identifier === item.route;
    });
    this.setCurrentActiveItem(item);
    // alert(this.currentDetails)
  }
  setCurrentActiveItem(item: any) {
    this.currentActiveItem = item.route;
  }

  submitButtonClickHandler() {
    this.mailService.buildParamsAndSendMail(this.formGroup)
  }

}
