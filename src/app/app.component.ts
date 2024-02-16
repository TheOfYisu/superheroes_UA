import { Component, Input } from '@angular/core';
import { SuperHeroe } from './interfaces/super-heroe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'superheroes_UA';
  create: boolean = true;
  heroe: SuperHeroe = {} as SuperHeroe;

  heroes: SuperHeroe[] = [
    {
      id: 1,
      name: 'Superman',
      superpower:
        'Super strength, flight, invulnerability, super speed, heat vision, freeze breath, x-ray vision, superhuman hearing, healing factor, and longevity',
      universe: 'DC',
      img: 'https://th.bing.com/th/id/R.3b346ee05a3d354e4c533240858cd256?rik=nvvisjlBnGQ8og&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f38200000%2fSuperman-Artwork-superman-38273746-1500-1463.jpg&ehk=FhM%2fTtqYJQ%2bo4Bt7eJGYCD3v2QSRYIQwzxvgkRSbu%2bE%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      id: 2,
      name: 'Batman',
      superpower:
        'Exceptional martial artist, combat strategy, inexhaustible wealth, brilliant deductive skill, advanced technology, and indomitable will',
      universe: 'DC',
      img: 'https://www.dccomics.com/sites/default/files/imce/2020/06-JUN/BM_Cv1000_5efb3e3e3e3e36.74753247.jpg',
    },
  ];

  editHeroe(hero: SuperHeroe): void {
    console.log(hero);
    this.create = false;
    this.heroe = hero;
  }

  newHeroe(hero: SuperHeroe): void {
    hero.id = this.heroes.length + 1;
    this.create = true;
    this.heroes.push(hero);
  }

  updateHeroe(hero: SuperHeroe): void {
    this.create = true;
    this.heroes = this.heroes.map((h) => (h.id === hero.id ? hero : h));
  }

  deleteHeroe(hero: SuperHeroe): void {
    this.heroes = this.heroes.filter((h) => h.id !== hero.id);
  }

  cancel(): void {
    this.create = true;
  }
}
