import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

    artista:any={};
    topTracks:any[] = [];
    loadingArtista: boolean;
  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) { 
       this.loadingArtista = true;
       this.activatedRoute.params.subscribe(parametros=>{
        
            this.getArtista( parametros['id'] );  
            this.getTopTracks( parametros['id'] );
       });
  }

  getArtista(id: string){
    this.loadingArtista = true;
     this.spotifyService.getArtista(id).subscribe(data => {
      this.artista = data;
      this.loadingArtista = false;
  });
   
  }

  public getTopTracks(idArtista: string){
      this.loadingArtista = true;
      this.spotifyService.getTopTracks(idArtista).subscribe(tracks => {
      console.log(tracks);
      this.topTracks = tracks;
      this.loadingArtista = false;
     });
  }

  ngOnInit() {
  }

}
