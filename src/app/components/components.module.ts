import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IllustratonsModule } from '../illustrations/illustrations.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { MenuComponent } from './menu/menu.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { CvDownloaderComponent } from './cv-downloader/cv-downloader.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeroComponent,
    SocialNetworksComponent,
    FooterComponent,
    MenuComponent,
    CvDownloaderComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IllustratonsModule
  ],
    exports: [
        HeaderComponent,
        HeroComponent,
        SocialNetworksComponent,
        FooterComponent,
        MenuComponent,
        CvDownloaderComponent,
    ]
})
export class ComponentsModule { }
