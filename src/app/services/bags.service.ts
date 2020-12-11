import { Bags } from './../models/bags';

//import { bags } from '/assets/data/bags.json';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BagsService {

  private URL:string = "/assets/data/bags.json";
 
  constructor(private http: HttpClient) { }

    getAllBags(): Observable<Bags[]>{
      return this.http.get<Bags[]>(this.URL);
    }

}
 