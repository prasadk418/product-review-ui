import { Component, OnInit } from '@angular/core';
import { AppHttpClientService } from '../apphttpclient.service';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  ngOnInit() {
   // this.getData();
    //this.ratingDisplay();
  }
  
  
  getData(){
       
  }
  
 
  ratingDisplay(){
    //empty or user given rating swill be displayed here
  }
 
  constructor(private appHttpClientService : AppHttpClientService){}
  

}
