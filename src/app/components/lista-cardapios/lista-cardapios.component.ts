import { Component, OnInit } from '@angular/core';
import { Cardapio } from 'src/app/models/cardapio';
import { CardapioService } from 'src/app/services/cardapio.service';

@Component({
  selector: 'app-lista-cardapios',
  templateUrl: './lista-cardapios.component.html',
  styleUrls: ['./lista-cardapios.component.scss']
})

export class ListaCardapiosComponent implements OnInit {
  
 
  constructor( private cardapioService: CardapioService) { }

  cardapios?:Cardapio[];

  ngOnInit(): void {
    this.cardapios = this.cardapioService.getCardapiosDestacados();
  }

}
