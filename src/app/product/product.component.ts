import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  items = ["Angular4","react","Underscore"];
    newItem = "";
    pushItem = function (){
      if(this.newItem!=""){
        this.items.push(this.newItem);
        this.newItem="";
      }
  } 
  removeItem = function(index){
    this.items.splice(index,1);
  }
 
}
