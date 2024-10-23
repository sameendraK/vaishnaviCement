import { Component, OnInit } from '@angular/core';
// import { NgxMailSenderModule } from 'ngx-mail-sender';
import { MailService } from '../../services/mail.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { NgxMailSenderService } from 'ngx-mail-sender/projects/ngx-mail-sender/src/public-api';
// import {Ngx}
// import {  } from 'emailjs';
@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {
  constructor(
    private mailService: MailService,
    private fb: FormBuilder,
    // private emailJs:emailJs
    // private ngx: NgxMailSenderService
  ) {

  }
  email = 'info@Vaishnavi constructions.com'

  formGroup!: FormGroup;
  formDataVal: any;
  ngOnInit() {
    this.formGroup = this.fb.group({
      name: ['', [Validators.requiredTrue]],
      email: ['', [Validators.email]],
      phone: ['', [Validators.requiredTrue]],
      message: ['', [Validators.requiredTrue]]
    })
  }

  submitButtonClickHandler() {
    this.mailService.buildParamsAndSendMail(this.formGroup);
  }
}
