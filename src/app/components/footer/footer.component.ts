import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MailService } from '../../services/mail.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  formGroup!: FormGroup
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private mailService: MailService
  ) {
  }
  ngOnInit(): void {
    this.formGroup = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        message: ['', [Validators.required]],
      }
    )
  }
  footerNavItems: any[] = [
    { name: "Home", route: 'home' },
    { name: "About Us", route: 'about' },
    { name: "Services", route: 'services' },
    { name: "Media", route: 'media' },
    { name: "Contact Us", route: 'contact' },
  ]
  vaishnaviEmail: string = 'info@Vaishnavi constructions.com';

  footerNavItemClickHandler(item: any) {
    this.router.navigate([item.route])
  }

  submitButtonClickHandler() {
    this.mailService.buildParamsAndSendMail(this.formGroup);
  }

}
