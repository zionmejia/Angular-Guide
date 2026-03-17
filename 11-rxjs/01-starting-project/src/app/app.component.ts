import {Component, DestroyRef, effect, inject, signal} from '@angular/core';
import {interval, map, Observable} from "rxjs";
import {toObservable, toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})

export class AppComponent {
  private destroyRef = inject(DestroyRef);
  public clickCount = signal<number>(0);
  public clickCount$ = toObservable(this.clickCount);
  public interval$ = interval(1000);
  public intervalSignal = toSignal(this.interval$ , { initialValue: 0 });
  public customInterval$ = new Observable((subscriber) => {
    let timesExecuted = 0;
    const interval = setInterval(() => {
      if (timesExecuted > 3) {
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      console.log("test");
      subscriber.next({message: 'New custom interval'});
      timesExecuted++;
    },2000);
  });

  constructor() {
    // effect(() => console.log(`Clicked button ${this.clickCount()} Times`))
  };

  ngOnInit(): void {
    // const subscription = interval(1000).pipe(
    //   map((val) => val * 2)
    // ).subscribe({
    //   next: (val) => console.log(val),
    //   complete: () => console.log('complete')
    // });
    //
    // this.destroyRef.onDestroy(() => {
    //     subscription.unsubscribe();
    //   }
    // )
    this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log("completed")
    });

    const subscription = this.clickCount$.subscribe({
      next: (val) => console.log(`Click button ${this.clickCount()} times`),
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }

  public onClick() {
    this.clickCount.update(prevCount => prevCount + 1);
  }


}
