import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DynamicComponent } from '../../lib/dynamic.component';
import { GenericHostDirective } from '../../lib/generic-host.directive';

@Component({
  selector: 'app-comp48',
  templateUrl: './comp48.component.html',
  styleUrls: ['./comp48.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Comp48Component implements OnInit, DynamicComponent {
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
