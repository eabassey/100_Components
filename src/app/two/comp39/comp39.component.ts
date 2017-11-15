import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DynamicComponent } from '../../lib/dynamic.component';
import { GenericHostDirective } from '../../lib/generic-host.directive';

@Component({
  selector: 'app-comp39',
  templateUrl: './comp39.component.html',
  styleUrls: ['./comp39.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Comp39Component implements OnInit, DynamicComponent {
  data?: any;
  host: GenericHostDirective;
  mutate() {
    throw new Error('Method not implemented.');
  }
  restore() {
    throw new Error('Method not implemented.');
  }
  constructor() { }

  ngOnInit() {
  }

}
