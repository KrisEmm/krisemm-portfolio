import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

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
      emailAddress: ''
    };
  }

  ngOnInit(): void {
    window.scroll({
      top: 0,
    });
  }

  handleSubmit(form: NgForm): void {
    this.isSending = true;
    setTimeout(() => {
      console.log(form.value);
      this.info.name = form.value.name;
      this.info.emailAddress = form.value.email;
      this.isSent = true;
      this.isError = false;
    }, 3000);
  }

  handleReset(form: NgForm): void {
    this.isSent = false;
    this.isSending = false;
    this.isError = false;
    form.resetForm();
  }
}
