import {
  Component,
  Inject,
  PLATFORM_ID,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(@Inject(PLATFORM_ID) platformId: object) {
    isBrowser.set(isPlatformBrowser(platformId));
  }
}

export const isBrowser: WritableSignal<boolean> = signal(false);
