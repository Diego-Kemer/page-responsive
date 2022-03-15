import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {
  public observador: any;
  public imagen: any;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.imagen = document?.getElementById('img')
    this.observador = new IntersectionObserver(()=>{
        console.log('ejercitandoelpene')
     }, {
       root: null,
       rootMargin: '-100px',
       threshold: 1.0
     }).observe(this.imagen)
  }

 

}
