import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomIconComponent } from './custom-icon/custom-icon.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { WorksComponent } from './works/works.component';
import { WorkDetailComponent } from './work-detail/work-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomIconComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    SkillsComponent,
    WorksComponent,
    WorkDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
