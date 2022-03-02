import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActivated = false;

  constructor() { }

  ngOnInit(): void {
    this.animateHeader();
  }

  animateHeader(): void {
    const logo = document.querySelector('#logo');
    const textLogo1 = document.querySelector('#text-logo-1');
    const textLogo2 = document.querySelector('#text-logo-2');
    const optionsHeader = document.querySelector('#options-header');
    const linkDownload = document.querySelector('#link-download-cv');
    if (logo) { logo.classList.add(
      'animate__animated',
      'animate__zoomIn');
    }
    if (textLogo1) { textLogo1.classList.add(
      'animate__animated',
      'animate__backInDown');
    }
    if (textLogo2) { textLogo2.classList.add(
      'animate__animated',
      'animate__backInUp');
    }
    if (optionsHeader) { optionsHeader.classList.add(
      'animate__animated',
      'animate__fadeInRight',
      'animate__delay-1s');
    }
    if (linkDownload) { linkDownload.classList.add(
      'animate__animated',
      'animate__flash',
      'animate__delay-5s',
      'animate__repeat-3'
    );
    }
  }
  showMenu(): void {
    this.isActivated = !this.isActivated;
    document.body.classList.toggle('no-scroll');
  }
}
