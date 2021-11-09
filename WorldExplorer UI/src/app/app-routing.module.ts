import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavouritesComponent } from './favourites/favourites.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { BackgroundComponent} from './background/background.component'
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path:'',
    component:BackgroundComponent
  },

  {
    path:'home/:id/home' ,redirectTo:'home'
  },
  
  {
    path:'home',
    component:HomeComponent
  },
 
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"favorites",
    component:FavouritesComponent
    
  },
  {
    path:"logout",
    component:LogoutComponent
  },
  {
    path:"header",
    component:HeaderComponent
  },
  {
    path:"search",
    component:SearchComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
