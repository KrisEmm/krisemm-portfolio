import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() show: boolean;
  @Output() changeMenuIcon = new EventEmitter<boolean>();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goto(target: string): void {
    this.show = !this.show;
    this.changeMenuIcon.emit(false);
    if (target === 'download') {
      window.open(`https://krisemm.github.io/krisemm-portfolio/assets/files/CV-Cristian_Emmanuel_Castillo_Medina.pdf`, '_blank');
    } else {
      setTimeout(async () => {
       await this.router.navigate([target]);
      }, 800);
    }
  }
}
