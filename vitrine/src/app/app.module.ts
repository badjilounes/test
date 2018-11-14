import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { NavigationComponent } from './component/navigation/navigation.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatInputModule, MatSelectModule, MatRadioModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTreeModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { DraggableComponent } from './component/exercices/draggable/draggable.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ExerciceComponent } from './page/exercice/exercice.component';
import { AboutComponent } from './page/about/about.component';
import { LoginComponent } from './page/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularComponent } from './page/courses/angular/angular.component';
import { UmlComponent } from './page/courses/uml/uml.component';
import { HtmlCssComponent } from './page/courses/htmlcss/htmlcss.component';
import { FormComponent } from './component/form/form.component';
import { TableComponent } from './component/table/table.component';
import { TreeComponent } from './component/tree/tree.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    DraggableComponent,
    ExerciceComponent,
    AboutComponent,
    LoginComponent,
    AngularComponent,
    UmlComponent,
    HtmlCssComponent,
    FormComponent,
    TableComponent,
    TreeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    DragDropModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
