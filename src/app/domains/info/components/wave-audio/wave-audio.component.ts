import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild, signal } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css',
})
export class WaveAudioComponent {
  @Input({ required: true }) audioUrl!: string; //! elimina la alerta de que no se ha inicializado la variable
  @ViewChild('wave') container!: ElementRef;
  private audio!: WaveSurfer;
  isPlaying = signal(false);

  ngAfterViewInit() {
    this.audio = WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement,
      waveColor: 'violet',
      progressColor: 'purple',
      cursorColor: 'navy',
      barWidth: 3,
      barRadius: 3,
    });
    this.audio.on('play', () => {
      this.isPlaying.set(true);
    });
    this.audio.on('pause', () => {
      this.isPlaying.set(false);
    });
  }

  playPause() {
    this.audio.playPause();
  }
}
