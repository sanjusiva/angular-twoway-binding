import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.scss']
})
export class MycompComponent implements OnInit, OnChanges {
  n:number=10;//member variable
  place="Enter ur name";
  dis:boolean=false;
  name:string="Sanju";
  name1:string="Hello"
  constructor() { }
  
  ngOnInit(): void {
  }
  ngOnChanges() {
    
  }
fun(){
  return "hello"
}
welcome()
{
  alert ("WELCOME");
}
}
