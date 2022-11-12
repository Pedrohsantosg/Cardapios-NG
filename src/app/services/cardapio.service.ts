import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cardapio } from '../models/cardapio';
import {HttpClient}  from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { cardapiosDTO } from '../models/cardapiosDTO';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  //cardapios: Cardapio[] = [
  //];

  constructor(private http: HttpClient) { }



  cardapios:Cardapio[] = [
    {
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKaA0WCReMEpT45pGFAiimUBHwsOaeAwiYeQ&usqp=CAU",
      titulo: "Cardapio 01",
      descricao: "Lorem apsorum",
      telefone: "(83)98737-0281",
      destaque: true, 
    },
    {
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTJG829yflNT4ZL18aGofHC6vxnE5V-KhDCA&usqp=CAU",
      titulo: "Cardapio 02",
      descricao: "Lorem apsorum",
      telefone: "(83)98737-0281", 
      destaque: true,
    },
    {
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnbkUpwQJO9JeNsTFNEndAbeiOCORvS-PVrQ&usqp=CAU",
      titulo: "Cardapio 03",
      descricao: "Lorem apsorum",
      telefone: "(83)98737-0281", 
      destaque: true,
    },
    {
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFwXeWCZOmFWOCYkNAYLHdC9MzdEFy47-R3Q&usqp=CAU",
      titulo: "Cardapio 04",
      descricao: "Lorem apsorum",
      telefone: "(83)98737-0281", 
      destaque: true,
    },
  ];

  getCardapios(): Observable<cardapiosDTO> {
    return this.http.get<cardapiosDTO>(environment.apiUrl + "/cardapios");
  }

  getCardapiosDestacados(){
    return this.cardapios.filter(f=>f.destaque)
  }
}
