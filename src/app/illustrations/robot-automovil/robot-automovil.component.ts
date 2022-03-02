import { Component, OnDestroy, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-robot-automovil',
  templateUrl: './robot-automovil.component.svg',
  styleUrls: ['./robot-automovil.component.scss']
})
export class RobotAutomovilComponent implements OnInit, OnDestroy {
  timeline;
  constructor() { }
  ngOnDestroy(): void {
    this.timeline.kill();
  }
  ngOnInit(): void {
    this.animateAutomobile();
  }

  animateAutomobile(): void {
    let randomColor;
    let dur = `0.${Math.floor(Math.random() * 100)}`;
    const timeline = gsap.timeline({ duration: dur, repeat: -1, repeatDelay: 0.1, onRepeat: () => { getColor(); } });
    this.timeline = timeline;
    function getColor(): void {
      randomColor = Math.floor(Math.random() * 16777215).toString(16);
      dur = `0.${Math.floor(Math.random() * 100)}`;
      timeline.to('#automovil_two', { opacity: 0, x: 500, duration: 0 });
      timeline.to('#stain_two', { fill: '#CCCCCC' });
      timeline.to('#bodywork_two', { fill: '#CCCCCC' });
      timeline.to('#paint-gun', { fill: `#${randomColor}` });
      timeline.to('#stain_one', { fill: `#${randomColor}` });
      timeline.to('#bodywork_one', { fill: `#${randomColor}`, duration: 1 });
      timeline.to('#paint-gun', { fill: '#F1F1F1' });
      timeline.to('#automovil_one', { x: -560, duration: 2 });
      timeline.to('#automovil_two', { opacity: 1, x: 0, duration: 1 });
      timeline.to('#automovil_one', { opacity: 0, x: 500, duration: 0 });
      timeline.to('#paint-gun', { fill: `#${randomColor}` });
      timeline.to('#stain_two', { fill: `#${randomColor}` });
      timeline.to('#bodywork_two', { fill: `#${randomColor}`, duration: 1 });
      timeline.to('#paint-gun', { fill: '#F1F1F1' });
      timeline.to('#automovil_two', { x: -560, duration: 2 });
      timeline.to('#stain_one', { fill: '#CCCCCC' });
      timeline.to('#bodywork_one', { fill: '#CCCCCC' });
      timeline.to('#automovil_one', { opacity: 1, x: 0, duration: 1 });
    }

  }
}
