import { Component } from '@angular/core';
import { of, filter, fromEvent } from 'rxjs';
import { take, takeWhile, takeLast, takeUntil, mergeMap,map } from 'rxjs';
@Component({
  selector: 'app-take',
  standalone: true,
  imports: [],
  templateUrl: './take.component.html',
  styleUrl: './take.component.css'
})
export class TakeComponent {

   source$ = of(10,20,30,40,50);

   newSource$ = of(3, 3, 3, 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3);

   stringSource = of('James', 'Jack', 'Ethan', 'Jason');

  constructor(){
     // Take the first emitted value, this is an observable
     const takeFirst = this.source$.pipe(take(1));
     takeFirst.subscribe({
      next:(val)=>console.log(`The First Take: ${val}`)
     });

     const takeWhileObs = this.source$.pipe(takeWhile(v=>v<30));
     takeWhileObs.subscribe({
      next:(val)=>console.log(`Take While:  ${val}`)
     });

     // Difference between filter and takewhile

     this.newSource$
  .pipe(takeWhile(it => it === 3))
  // log: 3, 3, 3
  .subscribe(val => console.log('takeWhile', val));

  this.newSource$
  .pipe(filter(it => it === 3))
  // log: 3, 3, 3, 3, 3, 3, 3
  .subscribe(val => console.log('filter', val));

  // Take last

   this.stringSource.pipe((takeLast(2))).subscribe({
    next:(str)=>console.log(`Last 2 strings ${str}`)
   });


   // TakeUntil
   //Take mouse events on mouse down until mouse up


   const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const mousemove$ = fromEvent(document, 'mousemove');

// after mousedown, take position until mouse up
mousedown$
  .pipe(
    mergeMap(_ => {
      return mousemove$.pipe(
        map((e: any) => ({
          x: e.clientX,
          y: e.clientY
        })),
        // complete inner observable on mouseup event
        takeUntil(mouseup$)
      );
    })
  )
  .subscribe(console.log);
  }

}
