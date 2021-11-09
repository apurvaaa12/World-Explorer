import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country';

import { CountryService } from '../services/country.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countrys:any;
   public arr=[9];
   name:any;
   


  constructor(private countryservice:CountryService) { }
  ngOnInit(): void {
    this.getCountry();
  };
  
   getCountry(){
     this.countryservice.getCountry().subscribe((data:any)=>{
       console.log(data);
       this.countrys=data;
        console.log(data['countrys'] );      
     });
    
    };
    Like(value:any){
    console.log(value);
    this.countryservice.addFavCountry(value).subscribe(
      (data)=>{
        console.log(data);
        alert("success");
      },
      (err)=>{
        console.log(err);
        alert("Failed to Store");
        
      }
    )
    };
    search()
   {
     if(this.name=="")
     {
       this.ngOnInit();
     }
     else
     {
       this.countrys=this.countrys.filter((result:any)=>{
         return result.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
       })
     }
   }
     
  

}