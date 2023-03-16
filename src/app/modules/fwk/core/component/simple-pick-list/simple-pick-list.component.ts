import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Injector } from '@angular/core';

import { MatSelectionList } from '@angular/material/list';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AbstractComponent } from '../abstract-component.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-simple-pick-list',
  templateUrl: './simple-pick-list.component.html',
  styleUrls: ['./simple-pick-list.component.scss']
})
export class SimplePickListComponent extends AbstractComponent {

  @Input()
  controlName = '';
  @Input()
  elementLabel = 'name';
  @Input()
  titleFrom = 'Permisos totales';
  @Input()
  titleTo = 'Permisos cargados';
  @Input()
  compositeKey = [];
  dataSelected = [];
  selectAll;
  _fromData = [];
  
  @Output() onChangeControl = new EventEmitter(true);

  @ViewChild('list', { static: true }) list: MatSelectionList;

  constructor(injector: Injector) {
    super(injector);
    this.setUpI18n({
      name: this.getI18nName(),
      lang: 'es',
      dictionary: {}
    });
  }

  onChangeSelectAll(e: boolean) {
    e ? this.list.selectAll() : this.list.deselectAll();
    this.onChangeControl.emit(this.dataSelected);
    console.log(this.dataSelected)
  }

  getI18nName(): string {
    return 'simple-pick-list';
  }

  getNameElementList(el: any) {
    return el[this.elementLabel];
  }

  onNgModelChangeList() {
    console.log(this.dataSelected)
    this.selectAll = this.dataSelected.length === this._fromData.length;
    this.onChangeControl.emit(this.dataSelected);
  }

  onNgModelChangeToList(elements: any[]) {

  }

  onInit() {

  }

  @Input()
  set fromData(value) {
    if (value === undefined || value === '') {
      value = [];
    }
    this._fromData = [];
    value.forEach(element => {
      this._fromData.push(element);
    });
    this._fromData =  value;
  }

}
