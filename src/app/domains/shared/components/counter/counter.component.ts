import {
  Component,
  Input,
  SimpleChange,
  SimpleChanges,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message: string = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    //NO ASYNC
    //before render
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    //NO ASYNC
    //before & during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);

    // verificar si cambio el valor de duration
    const duration = changes['duration']; // SimpleChange
    if (duration && duration.currentValue !== duration.previousValue) {
      console.log('new duration -->', duration.currentValue);
      // aqui puedo ejecutar una lógica de negocios
      this.showAlert();
    }
  }

  ngOnInit() {
    //ASYNC 🔥
    //after render
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration -->', this.duration);
    console.log('message -->', this.message);
    this.initCounter();
  }

  ngAfterViewInit() {
    //after render
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    //NO ASYNC
    //before destroy
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    // cuando el componente se destruye, corto el intervalo
    window.clearInterval(this.counterRef);
  }

  showAlert() {
    // alert('Done!');
  }

  initCounter() {
    this.counterRef = window.setInterval(() => {
      console.log('setInterval');
      this.counter.update((prevValue) => prevValue + 1);
    }, this.duration);
  }
}
