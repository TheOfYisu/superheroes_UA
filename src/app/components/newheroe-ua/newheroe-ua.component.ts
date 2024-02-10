import { Component, EventEmitter, Output } from '@angular/core';
import { SuperHeroe } from '../../interfaces/super-heroe';

@Component({
  selector: 'app-newheroe-ua',
  templateUrl: './newheroe-ua.component.html',
  styleUrl: './newheroe-ua.component.scss',
})
export class NewheroeUaComponent {
  @Output() emitNewHero: EventEmitter<SuperHeroe> =
    new EventEmitter<SuperHeroe>();

  hero: SuperHeroe = {} as SuperHeroe;

  createHero(): void {
    if (Object.keys(this.hero).length === 0) {
      alert('Todos los campos son requeridos.');
    } else {
      this.emitNewHero.emit(this.hero);
      this.hero = {} as SuperHeroe;
    }
  }
}
