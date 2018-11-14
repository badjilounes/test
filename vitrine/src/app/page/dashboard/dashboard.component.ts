import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'HTML/CSS', cols: 2, rows: 1, img: 'assets/img/html_css.png', url: 'courses/html_css'  },
          { title: 'Modélisation et diagrammes UML', cols: 1, rows: 1, img: 'assets/img/uml.png', url: 'courses/uml'  },
          { title: 'Angular', cols: 1, rows: 1, img: 'assets/img/angular.png', url: 'courses/angular'  }
        ];
      }

      return [
        { title: 'HTML/CSS', cols: 2, rows: 1, img: 'assets/img/html_css.png', url: 'courses/html_css'  },
        { title: 'Modélisation et diagrammes UML', cols: 1, rows: 1, img: 'assets/img/uml.png', url: 'courses/uml'  },
        { title: 'Angular', cols: 1, rows: 1, img: 'assets/img/angular.png', url: 'courses/angular'  }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
