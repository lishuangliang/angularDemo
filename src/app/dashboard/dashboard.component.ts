import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroServer: HeroService ) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroServer.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
