import { House } from '../../models/House';
import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../services/house.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks=[];

  constructor(private houseService: HouseService ) { }


  myhouse=  {
    "_id": "5ed76adeafccf846f0922edc",
    "title": "Piso adosado de roche",
    "subtitle": "Cadiz, Urbanización de Roche",
    "w_search": "Compra",
    "type": "Piso adosado",
    "province": "Malaga",
    "population": "Urbanización Roche",
    "room": 18,
    "bath": 5,
    "meters": 1780,
    "price": 2000000
  };
  
  ngOnInit() {
    

    this.getHouses();
    }

    getHouses() {
      this.houseService.getHouses()
        .subscribe(res => {
          console.log(res);
        });
    }

}
