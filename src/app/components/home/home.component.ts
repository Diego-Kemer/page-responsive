import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import * as data from '../../comentarios.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('nav') nav!: ElementRef;
  @ViewChild('presentar') presentar!: ElementRef;
  @ViewChild('datos') datos!: ElementRef;
  @ViewChild('cajas') cajas!: ElementRef;
  @ViewChildren('caja') caja!: Array<ElementRef>;
  @ViewChildren('caru_item') caruItem!: Array<ElementRef>;
  public menu: boolean = false;
  private observar: any;
  public comentarios = data;
  public colorIndicador: string = '0';
  constructor(){}

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    console.log(data)
    /* Nav aparece y desaparece según scroll */
    let ubicacionPrincipal = window.pageYOffset;
    let nav = this.nav
    window.addEventListener("scroll", function() {
      if(this.window.scrollY > 60){
        nav.nativeElement.style.background = "var(--prim)";
      }else{
        nav.nativeElement.style.background = "transparent";
      }

      let desplazamientoActual = window.pageYOffset;
      if(ubicacionPrincipal >= desplazamientoActual) {
          nav.nativeElement.style.top = "0px";
      } else {
          nav.nativeElement.style.top = "-120px";
      }
      ubicacionPrincipal = desplazamientoActual;
    });

    // Interceptor para mostrar el contenido
    const cargar = (entradas: any, observador: any)=>{
      entradas.forEach((element: any) => {
        if(element.isIntersecting){
          if(element.target.className == 'cajas'){
            this.caja.forEach(element=>{
              element.nativeElement.style.animation = 'aparece 1s linear forwards'
            })
          }else{
            element.target.style.animation = 'anime 1s linear forwards'
            element.target.style.opacity = '1'
          }
          
        }
      });
    }
    // Configuracion del observador
    this.observar = new IntersectionObserver(cargar, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    })

    // Ejecutar intercepcion de contenido
    this.observar.observe(this.presentar.nativeElement)
    this.observar.observe(this.datos.nativeElement)
    this.observar.observe(this.cajas.nativeElement)

    
  }

  cambiar(num: string){
    this.colorIndicador = num;
    this.caruItem.forEach(element=>{
      if(element.nativeElement.classList[1] == 'elegido'){
        element.nativeElement.classList.remove('elegido')
      }
      if(element.nativeElement.id == num){
        element.nativeElement.classList.add('elegido')
      }
    })
  }

  nex(){
    const select = parseInt(this.colorIndicador) + 1;
    this.movimiento(select)
  }
  back(){
    const select = parseInt(this.colorIndicador) - 1;
    this.movimiento(select)
  }
  movimiento(select: number){
    this.caruItem.forEach(element=>{
      if(element.nativeElement.classList[1] == 'elegido'){
        element.nativeElement.classList.remove('elegido')
      }
      if(element.nativeElement.id == select.toString()){
        element.nativeElement.classList.add('elegido')
        this.colorIndicador = select.toString()
      }
    })
  }
  

  menuHburguer(){
    this.menu = !this.menu
  }
  
  


}
