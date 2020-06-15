import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';

   // Pipes
import { NoImagePipe } from './pipes/no-image.pipe';    

   // Servicios


  // Importar las routas
  import { ROUTES } from './app.routes';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistaComponent,
    NavbarComponent,
    SearchComponent,
    NoImagePipe,
    TarjetasComponent,
    LoadingComponent
   
    
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash:true })
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
