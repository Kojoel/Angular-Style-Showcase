import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../model/hero.model';
import { Observable, interval, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroDataUrl = '../assets/data/data.json';

  constructor(private http: HttpClient) { }

  getHeroes() {
    return this.http.get<Hero[]>(this.heroDataUrl)
  }
  // getHeroes(): Observable<Hero> {
  //   return this.http.get<Hero[]>(this.heroDataUrl).pipe(
  //     switchMap((heroes) => {
  //       return interval(5000).pipe(
  //         map((index) => heroes[index % heroes.length]) // Emits one hero every 5 seconds
  //       );
  //     })
  //   );
  // }


}
