import { Component, OnDestroy, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import MotionPathPlugin from 'gsap/MotionPathPlugin';


interface Tech {
  title: string;
  subtitle: string;
  svg: string;
}
@Component({
  selector: 'app-robot-techs',
  templateUrl: './robot-techs.component.svg',
  styleUrls: ['./robot-techs.component.scss']
})
export class RobotTechsComponent implements OnInit, OnDestroy {
  techs: Tech[];
  timeline: any;
  title: HTMLElement;
  subtitle: HTMLElement;
  constructor() {

  }
  ngOnDestroy(): void {
    this.timeline.kill();
  }

  ngOnInit(): void {
    this.title = document.querySelector('#about_dev_text');
    this.subtitle = document.querySelector('#about_tech_text');
    this.techs = [
      {
        title: 'frontend',
        subtitle: 'html',
        svg: 'html',

      },
      {
        title: 'frontend',
        subtitle: 'css',
        svg: 'css',
      },
      {
        title: 'frontend',
        subtitle: 'sass',
        svg: 'sass',
      },
      {
        title: 'frontend',
        subtitle: 'javascript',
        svg: 'javascript'
      },
      {
        title: 'frontend & backend',
        subtitle: 'typescript',
        svg: 'typescript'
      },
      {
        title: 'frontend',
        subtitle: 'angular',
        svg: 'angular'
      },
      {
        title: 'frontend',
        subtitle: 'react',
        svg: 'react'
      },
      {
        title: 'backend',
        subtitle: 'nodejs',
        svg: 'node'
      },
      {
        title: 'backend',
        subtitle: 'expressjs',
        svg: 'express',
      },
      {
        title: 'backend',
        subtitle: 'java SE & EE',
        svg: 'java'
      },
      {
        title: 'backend',
        subtitle: 'spring framework & spring boot',
        svg: 'spring'
      },
      {
        title: 'backend',
        subtitle: 'graphQL',
        svg: 'graph',
      },
      {
        title: 'database',
        subtitle: 'mysql',
        svg: 'mysql',
      },
      {
        title: 'database',
        subtitle: 'postgreSQL',
        svg: 'postgres',
      },
      {
        title: 'database',
        subtitle: 'mongoDB',
        svg: 'mongo'
      },
      {
        title: 'frontend & backend',
        subtitle: 'git',
        svg: 'git'
      },
      {
        title: 'frontend & backend',
        subtitle: 'linux',
        svg: 'linux'
      },
      {
        title: 'frontend & backend',
        subtitle: 'docker',
        svg: 'docker',
      }

    ];
    this.animate();

  }

  animate(): void {

    gsap.registerPlugin(MotionPathPlugin);
    let i = -1;
    const techs = this.techs;
    const title = this.title;
    const subtitle = this.subtitle;
    const dur = 3.5;
    const timeline = gsap.timeline({ duration: dur, repeat: -1, onRepeat: () => { setTech(); } });
    this.timeline = timeline;

    function setTech(): void {

      i++;
      if (i >= techs.length) { i = 0; }
      title.textContent = techs[i].title;
      subtitle.textContent = techs[i].subtitle;
      title.classList.toggle('animate__fadeInRight');
      subtitle.classList.toggle('animate__fadeInUp');
      timeline.to(`#${techs[i].svg}`, {
        duration: dur,
        ease: 'power1.inOut',
        motionPath: {
          path: '#path',
          align: '#path',
          end: 1,
          alignOrigin: [0.5, 0.5]
        }
      });
      timeline.to('#monitor', { scale: 1.08, duration: 0.6 });
      timeline.to('#monitor', { scale: 1 });
    }
  }
}
