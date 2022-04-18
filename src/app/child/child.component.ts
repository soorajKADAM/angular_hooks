import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit ,OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked{
counter=0;
interval: any;

@Input()
channelName="";

@ContentChild('projectedcontent') projectedcontent: any;
  constructor() { 
    console.log("Child constructor is called");
  }

  ngOnInit(): void {
    console.log("Child OnInit is called");
    console.log("OnInit -" + this.projectedcontent);
    //this.interval = setInterval(()=>{
      //this.counter = this.counter + 1;
      //console.log(this.counter);
    //},1000)
  }

  ngOnDestroy(){
   // clearInterval(this.interval);
    console.log("Child OnDestroy is called");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    console.log("Child OnChanges is called");
    console.log("OnChanges-" + this.projectedcontent);
  }

  ngDoCheck(){
    console.log("child DoCheck is called");
    console.log("DoCheck -" + this.projectedcontent);
  }

  ngAfterContentInit(){
    console.log("In after content init");
    console.log("After Content Init -" + this.projectedcontent);
  }

  ngAfterContentChecked(){
    console.log("In After Content Checked");
  }

  ngAfterViewInit(){
    console.log("In After view init");
  }

ngAfterViewChecked(){
  console.log("In After View Checked");
}
}
