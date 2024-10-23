import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
// import { NgxMailSenderService } from '../../../node_modules/ngx-mail-sender/projects/ngx-mail-sender/src/lib/ngx-mail-sender.service';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(
    // private ngx: NgxMailSenderService
  ) { }

  buildParamsAndSendMail(form: FormGroup) {
    let params = this.buildParams(form);
    this.sendEmail(params);
  }

  private buildParams(form: FormGroup) {
    return {
      fromName: form.get('name')?.value,
      fromEmail: form.get('email')?.value,
      phone: form.get('phone')?.value,
      message: form.get('message')?.value
    }
  }

  private sendEmail(params: any) {
    emailjs
      .send('service_yx5gdlq', 'template_rpzzz0f', params, {
        publicKey: 'LZGosz7R4pxB7seFV',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
