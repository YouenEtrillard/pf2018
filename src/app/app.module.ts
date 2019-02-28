import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { Angular2PhotoswipeModule } from 'angular2_photoswipe';

import { AppComponent } from './app.component';
import { CustomIconComponent } from './custom-icon/custom-icon.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AboutService } from './about/about.service';
import { WorksService } from './works/works.service';
import { HomeComponent } from './home/home.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { SkillsComponent } from './skills/skills.component';
import { WorksComponent } from './works/works.component';
import { WorkDetailComponent } from './work-detail/work-detail.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ParallaxCoverDirective } from './parallax-cover.directive';
import { ScrolltopComponent } from './scrolltop/scrolltop.component';
import { AppearDirective } from './appear.directive';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ContactComponent,
    CustomIconComponent,
    HomeComponent,
    ParallaxCoverDirective,
    SidebarComponent,
    SkillsComponent,
    WorkDetailComponent,
    WorksComponent,
    ScrolltopComponent,
    AppearDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    Angular2PhotoswipeModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpErrorHandler,
    AboutService,
    WorksService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
