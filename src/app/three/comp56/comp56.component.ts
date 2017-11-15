import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DynamicComponent } from '../../lib/dynamic.component';
import { GenericHostDirective } from '../../lib/generic-host.directive';

@Component({
  selector: 'app-comp56',
  templateUrl: './comp56.component.html',
  styleUrls: ['./comp56.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Comp56Component implements OnInit, DynamicComponent {
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
