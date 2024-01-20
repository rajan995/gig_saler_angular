import { AfterViewInit, Component, HostBinding, HostListener, Inject, OnInit, PLATFORM_ID, afterNextRender, effect, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UtilityService } from './service/utility.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angularApp';

  constructor(private utility: UtilityService, @Inject(PLATFORM_ID) private platformId: Object) {

  }
  
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    const isBrowser = isPlatformBrowser(this.platformId);
    if (isBrowser) {
      this.onResize()
    }


  }

  @HostBinding('class.dark') get mode() {
    return this.utility.darkModeSignal();
  }
  
  @HostListener("window:resize", [])
  private onResize() {
    if (window.innerWidth >= 1024) {
      if (this.utility.enableMobileMenu() == false) {
        this.utility.enableMobileMenu.set(true);
      }
    }
  }
}


