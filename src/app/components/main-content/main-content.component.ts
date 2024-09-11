import { Component } from '@angular/core';
import { HeroPageComponent } from '../hero-page/hero-page.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeroPageComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
