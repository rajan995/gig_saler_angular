import { Component, HostBinding, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UtilityService } from './service/utility.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  constructor(private utility:UtilityService){

  }
  title = 'angularApp';
  ngOnInit(): void {
    
  }

  @HostBinding('class.dark') get mode(){
    console.log("dark mode")
    return this.utility.darkModeSignal();
  }

}
