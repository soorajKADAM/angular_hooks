import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck {
isChild= true;
channelName='';
  constructor() { 
    console.log("Parent constructor is called");
  }

  ngOnInit(): void {
    console.log("Parent OnInit is called");
  }

  togglechild() {
    this.isChild = !this.isChild;
  }

  ngOnChanges(){
    console.log("Parent OnChanges is called");
  }

  ngDoCheck(){
    console.log("Parent Docheck is called");
  }
}
