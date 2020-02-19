import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'back-button',
    template: `<button mat-raised-button (click)="goBack()" [color]="color" class="mat-white-bg mt-sm-0">
                    <i class="material-icons">keyboard_arrow_left</i><span>Volver</span>
               </button>`,
})
export class BackButtonComponent {
    @Input()color: string;

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}