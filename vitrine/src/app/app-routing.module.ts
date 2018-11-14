import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavigationComponent} from './component/navigation/navigation.component';
import {DashboardComponent} from './page/dashboard/dashboard.component';
import {AboutComponent} from './page/about/about.component';
import {ExerciceComponent} from './page/exercice/exercice.component';
import {LoginComponent} from './page/login/login.component';
import {AngularComponent} from './page/courses/angular/angular.component';
import {UmlComponent} from './page/courses/uml/uml.component';
import {HtmlCssComponent} from './page/courses/htmlcss/htmlcss.component';
import {AuthGuard} from './guard/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component : LoginComponent },
  { path: '', component: NavigationComponent, canActivate: [AuthGuard],
    children: [
      {path: '', component : DashboardComponent},
      {path: 'exercice', component : ExerciceComponent},
      {path: 'about', component : AboutComponent},
      {path: 'courses', children: [
          {path: 'angular', component: AngularComponent},
          {path: 'uml', component: UmlComponent},
          {path: 'html_css', component: HtmlCssComponent},
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
