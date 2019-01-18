import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FilterPipe } from './welcome/filter.pipe';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FilterPipe,
    ProfileComponent,
    RecipesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
