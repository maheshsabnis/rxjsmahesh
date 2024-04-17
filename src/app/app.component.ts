import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import {  Observable,Observer } from 'rxjs';
import {filter, map} from 'rxjs/operators';
import { of,fromEvent } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   data$:Observable<number>;
   data1$:Observable<number>;
   filterData$:Observable<number>;
   time$:Observable<any>;


   constructor(){


 // Shows latestd emited value
    this.data$ =of(1,2,3,4,5).pipe(
       map((v)=>v*2)
    );


  this.data1$=of(1, 2, 3)
  .pipe(map((x) => x * x));

  this.data1$.subscribe({
     next:(res)=> {console.log(res)} // 1,4,9
  })

    of(1, 2, 3)
  .pipe(map((x) => x * x))
  .subscribe((v) => console.log(`value: ${v}`));

    //Attach the click Event to document
    const clicks = fromEvent<PointerEvent>(document, 'click');
    const positions = clicks.pipe(map(ev => ev.clientX));

    positions.subscribe(x => console.log(x));


    // Using the Filter

    const myObservable:Observable<number> = new Observable((observer)=>{
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.next(4);
        observer.next(5);
        observer.next(6);
        observer.next(7);
        observer.next(8);
        observer.next(9);
        observer.next(10);
        observer.next(11);
    });
    this.filterData$ = myObservable.pipe(
       filter((v)=>v%2 == 0)
    );

   this.filterData$.subscribe({
    next:(v)=> {console.log(`Chosen Value :${v}`);}
   });
  // Show Time Contineuslu
     this.time$= new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
   }
}
