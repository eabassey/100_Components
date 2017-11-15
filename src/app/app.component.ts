import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as loaderActions from './lib/actions';
import { ViewChild } from '@angular/core';
import { TestDirective } from './test.directive';
import { modulesInOne } from './one/one.module';
import { modulesInTwo } from './two/two.module';
import { modulesInThree } from './three/three.module';
import { modulesInFour } from './four/four.module';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/take';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

////// ALL MODULES
export const allModules = [...modulesInOne, ...modulesInTwo, ...modulesInThree, ...modulesInFour];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild(TestDirective) host: TestDirective;
  constructor(private store: Store<any>) {}

  ngOnInit() {
    const time$ = Observable.timer(0, 1);
    time$
    .map(x => {
       return this.store
        .dispatch(new loaderActions.LoadComponent<{name: string}>
          ({component: allModules[x], host: this.host, data: {name: `Someone did ${x}`} }));
      })
      .take(100).subscribe();
  }

  load() {

    //  const time$ = Observable.timer(0, 1000);
    //  time$
    //  .map(x => {
    //     return this.store
    //      .dispatch(new loaderActions.LoadComponent<{name: string}>
    //        ({component: allModules[x], host: this.host, data: {name: `Someone did ${x}`} }));
    //    })
    //    .take(100).subscribe();

  }

}





