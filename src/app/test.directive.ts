
import { Directive, ViewContainerRef } from '@angular/core';
import { GenericHostDirective } from './lib/generic-host.directive';


@Directive({
    selector: '[appTest]'
})
export class TestDirective implements GenericHostDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
}
