import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  productname;
  productDesc;

  constructor() { }

  ngOnInit() {
  }


  saveProduct(form:any){
    alert("Thank u");
  }
}
