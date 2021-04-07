import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cardForm : FormGroup;

  cards:Card[];
  card:Card;

  constructor(private formBuilder:FormBuilder,
    private activedRoute: ActivatedRoute,
    private rentalService:RentalService,
    private toastrService:ToastrService,
    private cardService:CardService,) { }

  ngOnInit(): void {
    this.getCards()
  }

  getCards(){
    this.cardService.getCards().subscribe((response)=>{
      this.cards=response.data;
      console.log(response.data)
    });
  }

  createCardForm(){
    this.cardForm =this.formBuilder.group({
      nameSurname:["",Validators.required],
      cardNo:["",Validators.required],
      expirationDate:["",Validators.required],
      cvc:["",Validators.required],
    })

  }

  createCard(){
    if ((this.card.nameSurname === undefined))  {
      this.toastrService.warning('Kart üzerindeki isim bilgisini kontrol ediniz.');
    }
    else if ( (this.card.cardNo === undefined) ){
      this.toastrService.warning('Kart Numarası bilgisini kontrol ediniz.');
    }
    else if ( (this.card.expirationDate === undefined)  )  {
      this.toastrService.warning('Tarih  bilgisini kontrol ediniz.');
    }
    else if ( (this.card.cvc === undefined))  {
      this.toastrService.warning('Cvc bilgisini kontrol ediniz.');
    }else{
      this.toastrService.warning('Ödeme işlemi başarıyla tamamlandı.');
      console.log(this.createCard)
    }
  }

}
