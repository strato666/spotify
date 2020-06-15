import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { NoImagePipe } from 'src/app/pipes/no-image.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
   
  artistas:any[]=[];
  constructor(private spotifyService:SpotifyService ) { }

  


     public buscar(termino:string){
            this.spotifyService.getArtistas(termino).subscribe(
              (data:any)=>{ 
                   this.artistas=data;
                  

                   }
            );
     }

 
}
