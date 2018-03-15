import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Router, Routes} from '@angular/router'
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageContentComponent } from './components/home-page-content/home-page-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { environment } from '../environments/environment';
import {AngularFireAuthModule} from "angularfire2/auth";
import {AuthService} from "./service/auth.service";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LbdModule } from './components/lbd/lbd.module';
import { TablesComponent } from './components/tables/tables.component';
import { UserComponent } from './components/user/user.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DriversComponent } from './components/drivers/drivers.component';
import {FilledbinsComponent} from "./components/filledbins/filledbins.component";
import { CustomerFeedbackReportComponent } from './components/customer-feedback-report/customer-feedback-report.component';







const  applicationRouters:Routes = [
  //add all components links here
  {path:'',component:HomePageContentComponent},
  {path:'login',component:LoginComponent},
  {path:'userhome',component:DashboardComponent},
  {path:'tables',component:TablesComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'user',component:UserComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'bins',component:FilledbinsComponent},
  {path:'drivers',component:DriversComponent},
  {path:'customer-feedback-report',component:CustomerFeedbackReportComponent}



];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageContentComponent,
    FooterComponent,
    LoginComponent,
    CarouselComponent,
    DashboardComponent,
    SidebarComponent,
    TablesComponent,
    UserComponent,
    AboutComponent,
    ContactComponent,
    DriversComponent,
    CustomerFeedbackReportComponent,
    DriversComponent,
    FilledbinsComponent,







  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    FormsModule,
    RouterModule.forRoot(applicationRouters),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    LbdModule,
    FlashMessagesModule.forRoot(),


  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
