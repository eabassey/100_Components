import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DynamicComponent } from '../../lib/dynamic.component';
import { GenericHostDirective } from '../../lib/generic-host.directive';

@Component({
  selector: 'app-comp76',
  templateUrl: './comp76.component.html',
  styleUrls: ['./comp76.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Comp76Component implements OnInit, DynamicComponent {
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
