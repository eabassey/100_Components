import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GenericHostDirective } from '../../lib/generic-host.directive';
import { DynamicComponent } from '../../lib/dynamic.component';

@Component({
  selector: 'app-comp77',
  templateUrl: './comp77.component.html',
  styleUrls: ['./comp77.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Comp77Component implements OnInit, DynamicComponent {
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
