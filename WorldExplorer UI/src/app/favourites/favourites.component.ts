import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  
  constructor(private countryservice:CountryService) { }
public countrys:any;
  ngOnInit(): void {
    this.getCountry()
  }
  getCountry() {
    this.countryservice.getFavCountry().subscribe((data:any)=>{
      this.countrys=data;
      console.log(this.countrys);
      

    });
  
  }

 
}
