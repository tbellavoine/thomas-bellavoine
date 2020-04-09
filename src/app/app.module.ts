import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';

import { AppComponent } from './app.component';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { ContentComponent } from './partials/content/content.component';
import { NavigationComponent } from './partials/sidebar/navigation/navigation.component';
import { SocialsComponent } from './partials/sidebar/socials/socials.component';
import { WelcomeComponent } from './partials/content/welcome/welcome.component';
import { AboutComponent } from './partials/content/about/about.component';
import { SkillsComponent } from './partials/content/skills/skills.component';
import { WorksComponent } from './partials/content/works/works.component';
import { ContactComponent } from './partials/content/contact/contact.component';
import { FooterComponent } from './partials/footer/footer.component';
import { WorksDetailsComponent } from './partials/content/works/works-details/works-details.component';

import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './partials/content/notfound/notfound.component';
import { LoaderComponent } from './partials/loader/loader.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent, data: {animation: 'HomePage'}},
  { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'}},
  { path: 'works', component: WorksComponent, data: {animation: 'WorksPage'}},
  { path: 'contact', component: ContactComponent, data: {animation: 'ContactPage'}},
  { path: '**', component: NotfoundComponent, data: {animation: 'HomePage'}},
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    NavigationComponent,
    SocialsComponent,
    WelcomeComponent,
    AboutComponent,
    SkillsComponent,
    WorksComponent,
    ContactComponent,
    FooterComponent,
    WorksDetailsComponent,
    NotfoundComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'thomas-bellavoine' }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false, initialNavigation: 'enabled' } // <-- debugging purposes only
)
  ],
  providers: [{provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
