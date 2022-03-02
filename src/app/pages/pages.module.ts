import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import {IllustratonsModule} from '../illustrations/illustrations.module';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [
    HomeComponent,
    PortfolioComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    ProjectsComponent,
  ],
    imports: [
        CommonModule,
        ComponentsModule,
        IllustratonsModule,
        FormsModule,
        RouterModule,
    ],
  exports: [
    HomeComponent,
    PortfolioComponent,
  ]
})
export class PagesModule { }
