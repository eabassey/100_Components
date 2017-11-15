import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DynamicComponent } from '../../lib/dynamic.component';
import { GenericHostDirective } from '../../lib/generic-host.directive';

@Component({
  selector: 'app-comp60',
  templateUrl: './comp60.component.html',
  styleUrls: ['./comp60.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Comp60Component implements OnInit, DynamicComponent {
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
