import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
    this.transition();
    window.scroll({
      top: 0,
    });
  }


  transition(): void {
    const fadersInLeft = document.querySelectorAll('.transition-fadeInLeft');
    const fadersInRight = document.querySelectorAll('.transition-fadeInRight');
    const fadersIn = document.querySelectorAll('.transition-fadeIn');
    const observerFadeInLeft = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('animate__animated', 'animate__fadeInLeft');
          observerFadeInLeft.unobserve(entry.target);

        }
      });
    });
    const observerFadeInRight = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('animate__animated', 'animate__fadeInRight');
          observerFadeInRight.unobserve(entry.target);
        }
      });
    });
    const observerFadeIn = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.setAttribute('style', '--animate-duration: 2s;');
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          observerFadeIn.unobserve(entry.target);
        }
      });
    });
    fadersInLeft.forEach(faderInLeft => {
      observerFadeInLeft.observe(faderInLeft);
    });
    fadersInRight.forEach(faderInRight => {
      observerFadeInRight.observe(faderInRight);
    });
    fadersIn.forEach(faderIn => {
      observerFadeIn.observe(faderIn);
    });
  }

}
