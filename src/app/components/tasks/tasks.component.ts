import { House } from '../../models/House';
import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../services/house.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks = [];

  constructor(private houseService: HouseService ) { }

  houses: any;
  
  
  ngOnInit() {
    this.getAllHouses();
    }

    getAllHouses() {
      this.houseService
        .request('http://localhost:3000/houses')
        .subscribe((data) => {
          this.houses = data;
          console.log(data);
        });
    }

    

}
