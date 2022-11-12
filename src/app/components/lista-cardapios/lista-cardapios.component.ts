import { Component, OnInit } from '@angular/core';
import { Cardapio } from 'src/app/models/cardapio';
import { CardapioService } from 'src/app/services/cardapio.service';
import { cardapiosDTO } from 'src/app/models/cardapiosDTO';
@Component({
  selector: 'app-lista-cardapios',
  templateUrl: './lista-cardapios.component.html',
  styleUrls: ['./lista-cardapios.component.scss']
})

export class ListaCardapiosComponent implements OnInit {
  
 
  constructor( private cardapioService: CardapioService) { }

  cardapios?:any[];

  ngOnInit(): void {
    this.cardapioService
    .getCardapios()
    .subscribe(
      resposta => {
      this.cardapios = resposta.cardapios;
    });
  }

}
