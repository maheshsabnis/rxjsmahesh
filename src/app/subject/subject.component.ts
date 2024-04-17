import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-subject',
  standalone:true,
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  // define a subject

  sub:Subject<string>;

  constructor() {
    this.sub = new Subject();
  }

  ngOnInit() {
    this.sub.next('First Record......');
    this.sub.subscribe(n=>{
      console.log(`First Subscriber for ${n}`);
    });
    console.log('Moving to next record');
    this.sub.next('Second Record......');
    this.sub.subscribe(n=>{
      console.log(`Second Subscriber for ${n}`);
    });
    console.log('Moving to next record');
    this.sub.next('Third Record');
    this.sub.subscribe(n=>{
      console.log(`Third Subscriber for ${n}`);
    });
    this.sub.next('Fourth Record');
  }


}
