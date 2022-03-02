import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {init, send } from '@emailjs/browser';
import { environment } from '../../../environments/environment';

const config = {
  user_id: environment.emailjs_user_id,
  service_id: environment.emailjs_service_id,
  template_id: environment.emailjs_template_id
};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  isSending = false;
  isSent = false;
  isError = false;
  info: any;

  constructor() {
    this.info = {
      name: '',
      email: ''
    };
  }

  ngOnInit(): void {
    console.log(config);
    init(config.user_id);
    window.scroll({
      top: 0,
    });
  }

  async handleSubmit(form: NgForm): Promise<void> {
    this.isSending = true;
    try{
      await send(config.service_id, config.template_id, form.value, config.user_id);
      const {name, email} = form.value;
      this.info = {
        name,
        email
      };
      this.isSent = true;
      this.isError = false;
    }catch (e) {
      this.isSent = true;
      this.isError = true;
    }
  }

  handleReset(form: NgForm): void {
    this.isSent = false;
    this.isSending = false;
    this.isError = false;
    form.resetForm();
  }
}
