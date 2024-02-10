import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SuperHeroe } from '../../interfaces/super-heroe';

@Component({
  selector: 'app-heroe-ua',
  templateUrl: './heroe-ua.component.html',
  styleUrl: './heroe-ua.component.scss',
})
export class HeroeUaComponent {
  @Input() hero: SuperHeroe = {} as SuperHeroe;
  @Output() emitEditHero: EventEmitter<SuperHeroe> =
    new EventEmitter<SuperHeroe>();
  @Output() emitDeleteHero: EventEmitter<SuperHeroe> =
    new EventEmitter<SuperHeroe>();

  editHero(hero: SuperHeroe): void {
    this.emitEditHero.emit(hero);
  }

  deleteHero(hero: SuperHeroe): void {
    if (confirm(`Estas seguro de eliminar ${hero.name}?`)) {
      console.log(hero);
      this.emitDeleteHero.emit(hero);
    }
  }
}
