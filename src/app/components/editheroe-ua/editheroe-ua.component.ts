import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHeroe } from '../../interfaces/super-heroe';

@Component({
  selector: 'app-editheroe-ua',
  templateUrl: './editheroe-ua.component.html',
  styleUrl: './editheroe-ua.component.scss',
})
export class EditheroeUaComponent implements OnInit {
  @Input() hero: SuperHeroe = {} as SuperHeroe;
  @Output() emitUpdateHero = new EventEmitter<SuperHeroe>();
  @Output() emitCancel = new EventEmitter<boolean>();

  editHeroe: SuperHeroe = {} as SuperHeroe;

  saveHeroe(): void {
    if (confirm(`Estas seguro de editar?`)) {
      this.emitUpdateHero.emit(this.editHeroe);
    }
  }

  ngOnInit(): void {
    this.editHeroe = { ...this.hero };
  }

  cancel(): void {
    if (confirm(`Estas seguro que quiere cancelar?`)) {
      this.emitCancel.emit(true);
    }
  }
}
