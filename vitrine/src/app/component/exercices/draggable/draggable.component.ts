import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, NgZone, OnChanges, OnDestroy, Output,
  SimpleChange
} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {MatSnackBar, MatSnackBarRef, SimpleSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import * as _ from 'lodash';

enum Techno {
  'NodeJS',
  'PHP',
  'Java',
  '.Net',
  'Scala',
  'VueJS',
  'ReactJS',
  'AngularJS'
}

@Component({
  selector: 'app-draggable',
  templateUrl: './draggable.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./draggable.component.scss'],
})
export class DraggableComponent implements OnChanges {

  @Input() validateForm = false;
  @Output() formValidated: EventEmitter<void> = new EventEmitter<void>();

  front = [Techno.NodeJS, Techno.PHP, Techno.Java, Techno['.Net']];
  back = [Techno.Scala, Techno.VueJS, Techno.AngularJS, Techno.ReactJS];
  backExpected = [Techno.Scala, Techno.NodeJS, Techno.PHP, Techno.Java, Techno['.Net']];
  frontExpected = [Techno.VueJS, Techno.AngularJS, Techno.ReactJS];

  technoEnum = Techno;
  validated = false;

  constructor(private cdr: ChangeDetectorRef, private zone: NgZone) {}

  ngOnChanges(changes: {[key: string]: SimpleChange}) {
    for (const propName in changes) {
      if (propName === 'validateForm' && this.validateForm){
        this.validate();
      }
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }

  validate(): void {
    this.validated = true;
    this.cdr.markForCheck();
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.zone.run(() => {
          this.validated = false;
          this.cdr.markForCheck();
        });
      }, 500);
    });

    if (_.isEqual(this.front.sort(), this.frontExpected.sort()) && _.isEqual(this.back.sort(), this.backExpected.sort())) {
      this.formValidated.emit();
    }
  }
}
