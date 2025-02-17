import { Component, Input } from '@angular/core';
import {Hero} from '../hero';
import { NgIf, UpperCasePipe, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [HeroDetailComponent, NgIf, FormsModule, UpperCasePipe, RouterLink],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent {
  @Input() hero?: Hero; 
  
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}