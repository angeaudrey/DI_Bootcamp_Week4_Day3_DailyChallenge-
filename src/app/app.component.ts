import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'DailyChallenge';
  
  @ViewChild("mon_element",{static: true}) my_element!:ElementRef;
  ngOnInit(): void {
  fromEvent(this.my_element.nativeElement, 'focus')
        .subscribe(res => console.log("Focus event"));

        fromEvent(this.my_element.nativeElement, 'blur')
        .subscribe(res => console.log("Blur event"));  }

}
