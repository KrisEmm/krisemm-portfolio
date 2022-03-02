import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CompaniesComponent } from './companies/companies.component';
import { RobotAutomovilComponent } from './robot-automovil/robot-automovil.component';
import { RobotHeroComponent } from './robot-hero/robot-hero.component';
import { RobotTechsComponent } from './robot-techs/robot-techs.component';



@NgModule({
  declarations: [
    CompaniesComponent,
    RobotAutomovilComponent,
    RobotHeroComponent,
    RobotTechsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CompaniesComponent,
    RobotAutomovilComponent,
    RobotHeroComponent,
    RobotTechsComponent,
  ]
})
export class IllustratonsModule { }
