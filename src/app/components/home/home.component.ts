import { Component } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {
   error: boolean; 
   mensajeError: string;
   nuevasCanciones:any[]=[];

  constructor(private spotifyService:SpotifyService) { 
     this.error = false;
     this.spotifyService.getNuevosLanzamientos().
                 subscribe((data:any)=>{ 
                    
                     this.nuevasCanciones=data;
                  }, (errorServicio => {
                        this.error = true;
                        console.log(errorServicio);
                        this.mensajeError = errorServicio.error.error.message;
                  }));

  }
  
  
  

}
