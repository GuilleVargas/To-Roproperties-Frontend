
import { Component, OnInit, Input } from '@angular/core';
import { House } from '../../models/House'



@Component({
  selector: 'app-housecard',
  templateUrl: './housecard.component.html',
  styleUrls: ['./housecard.component.scss']
})
export class HousecardComponent implements OnInit {

  
  constructor() {
   }

  @Input() house: House; 

  

  ngOnInit(): void {
    
  }

  


}
