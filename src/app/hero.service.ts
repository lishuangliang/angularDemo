import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heros';
import {MessageService} from './message.service';

import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';
  constructor(
    private messageServer: MessageService
  ) { }
  private log(message: string): void {
    this.messageServer.add('HeroService: ${message}');
  }
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]> {
    this.messageServer.add('HeroService: fetched heroes '+ (new Date()).valueOf() );
    return of(HEROES);
  }
  // getHeroes(): Observable<Hero[]> {
  //   return this.http.get<Hero[]>(this.heroesUrl);
  // }
  getHero(id: number): Observable<Hero> {
    this.messageServer.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
