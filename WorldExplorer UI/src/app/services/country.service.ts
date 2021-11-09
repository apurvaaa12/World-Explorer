import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  search() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient:HttpClient) { }
    
    getCountry(){
      let url="https://restcountries.eu/rest/v2/all";
      return this.httpClient.get(url);
      
    }
  
    getFavCountry(){
      let url="  http://localhost:3000/profile"
    return this.httpClient.get(url);
      
    }
  
    addFavCountry(country:Country){
      let url="  http://localhost:3000/profile";
      return this.httpClient.post<Country>(url,country);
       }
  }
