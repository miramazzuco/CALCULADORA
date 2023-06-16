import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public numero = "0";
  public numeroaux = "0";
  public operacao = '';
  public newnumber = false;

  constructor() {}


  ngOnInit(){
    this.numero = "0";
    this.numeroaux = "0";
  }

  soma(){
    
    this.operacao = 'mais';
    this.numeroaux = this.numero;
    this.newnumber = true;
  }

  sub(){
   
    this.operacao = 'menos';
    this.numeroaux = this.numero;
    this.newnumber = true;
  }

  mult(){
    this.operacao = 'mult';
    this.numeroaux = this.numero;
    this.newnumber = true;
  }

  dividir(){
    
    this.operacao = 'divi';
    this.numeroaux = this.numero;
    this.newnumber = true;
  }

  clear(){
      this.numero = "0";
      this.numeroaux = "0";
      this.newnumber = true;
  }

  nega(){
    if(this.numero != '0'){
      this.numero =  this.numero.includes('-')
      ? this.numero.replace('-','')
      : '-' + this.numero;
     }
     this.newnumber = true;
  }

  percen(){
    this.newnumber = true;
    if(this.numero.length <= 8){
   this.operacao = '';
   this.numeroaux = '';

   const fixado = this.numero.includes(',') ? this.numero.split(',')[1].length + 2 :2;

   this.numero = (this.converte(this.numero) / 100).toFixed(fixado).toString().replace('.',',');
    }
    
  }

  igual(){
    const numerofinal = this.converte(this.numero);
    const numerofinalaux = this.converte(this.numeroaux);

    switch(this.operacao){
      case 'mais':
        this.numero = this.som(numerofinal,numerofinalaux).toString()
        break;
      case 'menos':
        this.numero = this.su(numerofinalaux,numerofinal).toString()
        break;
      case 'mult':
        this.numero = this.mul(numerofinal,numerofinalaux).toString()
        break;
      case 'divi':
        this.numero = this.div(numerofinalaux,numerofinal).toString()
        break;
    }

    this.operacao = '';
  
  }


  som(a: number, b: number):number{
    return a+b;
  }
  su(a: number, b: number):number{
    return a-b;
  }
  mul(a: number, b: number):number{
    return a*b;
  }
  div(a: number, b: number):number{
    return a/b;
  }

  decimal(){
   if(this.numero.length <= 8 && !this.numero.includes(',')){
    this.numero += ',';
   }
  }

  converte(dados:string): number{
    if(dados.includes(',')){
      return parseFloat(dados.replace(',','.'));
    }else{
      return parseInt(dados);
    }
  }

  numeros(num : string){
    if((this.numero.startsWith('0') && !this.numero.startsWith('0,'))){
      this.numero = '';
    }

    if(this.numero.length <= 8){
      if(this.newnumber){
        this.numero = num;
        this.newnumber = false;
      }else{
      this.numero += num;
      }
    }

  
  }
}
