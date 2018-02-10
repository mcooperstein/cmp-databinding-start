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
OnDestroy,
ViewChild,
ContentChild,
ElementRef
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
@ViewChild('heading') header: ElementRef;
@ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log("constuctor called")
  }

  ngOnInit() {
    console.log("ngOnInit called")
    console.log("Text content: "+this.header.nativeElement.textContent)
    console.log("Pargraph content: " + this.paragraph.nativeElement.textContent)
  }

  ngOnChanges(){
    console.log("ngOnChange called")
  }

  ngAfterViewInit(){
  console.log("Text content: "+this.header.nativeElement.textContent)
  }

  ngAfterContentInit(){
  console.log("Pargraph content: " + this.paragraph.nativeElement.textContent)
  }

  ngOnDestroy(){
    console.log("ngOnDestroy called")
  }

}
