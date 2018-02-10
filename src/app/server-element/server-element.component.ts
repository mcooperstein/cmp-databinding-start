import {
Component,
OnInit,
Input,
ViewEncapsulation,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
@Input('srvElement') element: {type:string,name:string,content:string};

  constructor() {
    console.log("constuctor called")
  }

  ngOnInit() {
    console.log("ngOnInit called")
  }

  ngOnChanges(){
    console.log("ngOnChange called")
  }

  ngOnDestroy(){
    console.log("ngOnDestroy called")
  }

}
