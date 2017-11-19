import {NgModule, OnInit} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ContactComponent} from './contact/contact.component';
import {ExperienceComponent} from './experience/experience.component';

const appRoutes:Routes=[
    {path:'home', component: HomeComponent}, 
    {path:'profile', component: ProfileComponent},
    {path:'portfolio', component: PortfolioComponent},
    {path:'contact', component: ContactComponent},
    {path:'experience', component: ExperienceComponent},
    { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
    },
];

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ],
    
})
  export class AppRoutingModule { }