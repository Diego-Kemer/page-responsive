import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'porfolio';
  public observador: any;
  public obse: any;
  public imagen: any;
  public svg: any;
  public num: number = 0;
  public nume: number = 0;
  public menu: boolean = false;
  

  ngOnInit(): void {
    this.imagen = document.querySelector('.animar')
    this.svg = document.querySelector('.svg')
    this.observador = new IntersectionObserver((res:any)=>{
        if(this.num > 0){
          res[0].target.style.animation = 'anime 2s ease';
          res[0].target.style.opacity = '.5'
        }else{
          console.log('nono')
        }
        this.num++
     }, {
       threshold: 0.5
     })
     this.observador.observe(this.imagen)

     this.obse = new IntersectionObserver((res:any)=>{
      if(this.nume > 0){
        res[0].target.style.animation = 'sube 2s ease';
      }else{
        console.log('nono')
      }
      this.nume++
   }, {
     threshold: 0.5
   })
     this.obse.observe(this.svg)
     
     
  }

  menuHburguer(){
    this.menu = !this.menu
  }
  
  
}
