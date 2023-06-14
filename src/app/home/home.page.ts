import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public numero = "0";
  public numeroaux = "0";

  constructor() {}


  ngOnInit(){
    this.numero = "0";
    this.numeroaux = "0";
  }

  soma(){
    
  }

  sub(){
    
  }

  mult(){
    
  }

  dividir(){
    
  }

  clear(){
      this.numero = "0";
      this.numeroaux = "0";
  }

  nega(){
    if(this.numero != '0'){
      this.numero =  this.numero.includes('-')
      ? this.numero.replace('-','')
      : '-' + this.numero;
     }
  }

  percen(){
   
  }

  igual(){
    
  }

  decimal(){
   if(this.numero.length <= 8 && !this.numero.includes(',')){
    this.numero += ',';
   }
  }

  numeros(num : string){
    if(this.numero.startsWith('0')){
      this.numero = ""
    }

    if(this.numero.length <= 8){
      this.numero += num;
    }

  
  }
}
