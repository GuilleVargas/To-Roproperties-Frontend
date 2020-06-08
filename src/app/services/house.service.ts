
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { House } from '../models/House';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HouseService {

  selectedHouses: House;
  House : House[];
  readonly URL = 'http://localhost:3000/houses'

  constructor( private http: HttpClient) { 
    this.selectedHouses = new House();
  }


  getHouses(){
    return this.http.get(this.URL);
  }

  request(urlRequest: string, httpParams?: HttpParams): Observable<Object> {
    const params = {};
    if (httpParams) {
      httpParams.keys().forEach((element) => {
        params[element] = httpParams.get(element);
      });
    }
    return this.http
      .get(urlRequest, httpParams ? { params } : undefined);   
  }
  

  postHouses(AddHouse: House){
    return this.http.post(this.URL, AddHouse);
  }

  putHouses(UpdateHouse: House){
    return this.http.put(this.URL + '/${UpdateHouse._id}', UpdateHouse);
  }

  deleteHouses(_id: String){
    return this.http.delete(this.URL + '/${_id}');
  }
}
