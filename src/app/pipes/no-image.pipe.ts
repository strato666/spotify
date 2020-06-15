import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(imagenes: any[]):string {
    if(!imagenes) return 'assets/imgagenes/noImage.png';
    if(imagenes.length>0)
        return imagenes[0].url;
    else
        return 'assets/imagenes/noImage.png';     
  }

}
