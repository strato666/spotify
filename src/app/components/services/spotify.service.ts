import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class SpotifyService {

  // tslint:disable-next-line: typedef-whitespace
  constructor(private http:HttpClient) {
      console.log('Servicio listo');
   }

public getNuevosLanzamientos(){
     const headers= new HttpHeaders({'Authorization':'Bearer BQBf4jsAMae13pLjWl9WvgfFfC-WkXGEH_8ZNphEDUjBQk19ljicS-zI5FIYtd7BB1iQyyLBX8CaRsp7iRg'   }); 
     return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers }).pipe(map(data=>{
            return data['albums'].items;}));
   }
public getArtistas(termino:string){
    const headers= new HttpHeaders({'Authorization':'Bearer BQBf4jsAMae13pLjWl9WvgfFfC-WkXGEH_8ZNphEDUjBQk19ljicS-zI5FIYtd7BB1iQyyLBX8CaRsp7iRg'   }); 
       return this.http.get(`https://api.spotify.com/v1/search?q=${ termino } &type=artist&limit=20`, { headers }).
       pipe(map(data=>{
            return data['artists'].items;
       }));
}

public getArtista(id:string){
   const headers= new HttpHeaders({'Authorization':'Bearer BQBf4jsAMae13pLjWl9WvgfFfC-WkXGEH_8ZNphEDUjBQk19ljicS-zI5FIYtd7BB1iQyyLBX8CaRsp7iRg'   }); 
       return this.http.get(`https://api.spotify.com/v1/artists/${ id }`, { headers }).
       pipe(map(data=>{
            return data;
       }));

    
}

public getTopTracks(idArtista:string){
   const headers= new HttpHeaders({'Authorization':'Bearer BQBf4jsAMae13pLjWl9WvgfFfC-WkXGEH_8ZNphEDUjBQk19ljicS-zI5FIYtd7BB1iQyyLBX8CaRsp7iRg'   }); 
       return this.http.get(`https://api.spotify.com/v1/artists/${ idArtista }/top-tracks?country=us`, { headers }).
       pipe(map(data=>{
           console.log(data);
            return data['tracks'];
       }));

    
}
   
   
}
