import {Component, OnDestroy} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {Observable, Subscription} from 'rxjs';
import { map } from 'rxjs/operators';
import {MatDrawer} from '@angular/material';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnDestroy {

  items = [{url: '/', label: 'Accueil'}, {url: '/exercice', label: 'Exercice'}, {url: '/about', label: 'À propos'}];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe( map(result => result.matches) );
  handsetSub: Subscription = undefined;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnDestroy() {
    if (this.handsetSub) {
      this.handsetSub.unsubscribe();
    }
  }

  closeDrawer(drawer: MatDrawer): void {
    this.handsetSub = this.isHandset$.subscribe(isHandset => isHandset ? drawer.close() : false);
  }
}
