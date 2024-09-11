import { Component } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.scss'
})
export class HeroPageComponent {

  constructor(public heroService: HeroService) {}

}
