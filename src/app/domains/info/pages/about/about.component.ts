import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../../domains/shared/components/counter/counter.component.js';
import { CommonModule } from '@angular/common';
import { WaveAudioComponent } from '../../../../domains/info/components/wave-audio/wave-audio.component.js';
import WaveSurfer from 'wavesurfer.js';
import { HighligthDirective } from '@shared/directives/highligth.directive.js';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CounterComponent,
    CommonModule,
    WaveAudioComponent,
    HighligthDirective,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export default class AboutComponent {
  duration = signal(1000);
  message = signal('Hello');
  audioUrl = 'assets/Y2meta.app - Palta & the mood - Turn it up (128 kbps).mp3';

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }
}
