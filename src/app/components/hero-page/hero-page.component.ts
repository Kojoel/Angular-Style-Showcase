import { Component } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable, interval, map, of, switchMap } from 'rxjs';
import { Hero } from '../../model/hero.model';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.scss'
})
export class HeroPageComponent {

  itemCount: number = 0;

  heroItems$: Observable<Hero[]> | undefined;

  constructor(public heroService: HeroService) {}

  ngOnInit() {
    this.heroService.getHeroes().subscribe(item => this.heroItems$ = of(item))
  }

  leftBtn() {
    if(this.itemCount <= 0) {
      this.itemCount = 4;
    }
    else{
      this.itemCount = this.itemCount - 1;
    }
  }


  rightBtn() {
    if(this.itemCount >= 4) {
      this.itemCount = 0;
    }
    else{
      this.itemCount = this.itemCount + 1;
    }
  }
}
