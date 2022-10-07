import { Meal } from './../../interfaces/comidas';
import { ComidasService } from './../../services/comidas.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comidasxtipo',
  templateUrl: './comidasxtipo.page.html',
  styleUrls: ['./comidasxtipo.page.scss'],
})
export class ComidasxtipoPage implements OnInit {

  titulo:String='';
  comidas:Meal[]=[];

  constructor( private router:Router,private srvFood:ComidasService ) { }

  ngOnInit() {
    this.titulo=this.router.getCurrentNavigation().extras.state.tipo;
    console.log(this.titulo);
    this.obtenerComidas(this.titulo);
  }

  obtenerComidas(tipocomida:String) {
    this.srvFood.getComidaxTipo(tipocomida).subscribe(resp=>{
      console.log(resp.meals);
      this.comidas.push(...resp.meals);
    })
  }

}
