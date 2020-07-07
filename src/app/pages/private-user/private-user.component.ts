import { House } from '../../models/House';
import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../services/house.service';
import { NgForm } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-private-user',
  templateUrl: './private-user.component.html',
  styleUrls: ['./private-user.component.scss'],
  providers: [HouseService]
})
export class PrivateUserComponent implements OnInit {

  constructor(public houseService: HouseService) { }

  ngOnInit(){
    this.getHouses();
  }

  addHouses(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.houseService.putHouses(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getHouses();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.houseService.postHouses(form.value)
      .subscribe(res => {
        this.getHouses();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
    
  }

  getHouses() {
    this.houseService.getHouses()
      .subscribe(res => {
        this.houseService.House = res as House[];
      });
  }

 

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.houseService.selectedHouses = new House();
    }
  }
}
