import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import {LogoutComponent} from './logout/logout.component';
import { FooterComponent } from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';

import { FavouritesComponent } from './favourites/favourites.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { RoutingService } from './services/routing.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import{ ReactiveFormsModule} from '@angular/forms';
import { Routes ,RouterModule} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BackgroundComponent } from './background/background.component';
import { NgxPaginationModule} from 'ngx-pagination';
import { CountryService } from './services/country.service';
import { SearchComponent } from './search/search.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';


const routes:Routes=[
  {
    path:'', redirectTo:'dashboard',pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'register/login',redirectTo:'login'
  }
  /*{
    path:'dashboard', 
    component:DashboardComponent,
    canActivate: [RoutingService]
  
  }*/
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FavouritesComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    BackgroundComponent,
    SearchComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    MatCardModule,
    Ng2SearchPipeModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatSidenavModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes), 
    ToastrModule.forRoot()
  ],
  providers: [CountryService,AuthenticationService,RoutingService,AuthGuard,ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
