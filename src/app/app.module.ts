import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/pages/home/home.component';
import { provideHttpClient } from '@angular/common/http';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { AboutComponent } from './features/about/pages/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './features/contact/pages/contact/contact.component';
import { SharedModule } from './shared/shared.module';

// Import FontAwesome module et les icônes que tu veux utiliser
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import des icônes "solides"
import { far } from '@fortawesome/free-regular-svg-icons'; // Import des icônes "regular"
import { fab } from '@fortawesome/free-brands-svg-icons'; // Import des icônes "brands"


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    FontAwesomeModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(library: FaIconLibrary) {
    // Ajouter les icônes souhaités dans la librairie
    library.addIconPacks(fas, far, fab);
  }

}
