import {AfterViewInit, ChangeDetectorRef, Component, NgZone, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar, MatSnackBarRef, MatStepper, SimpleSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.scss']
})
export class ExerciceComponent implements OnDestroy {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  validate = {first: false, second: false};
  snackRef: MatSnackBarRef<SimpleSnackBar> = undefined;

  constructor(private snackBar: MatSnackBar, private router: Router,
              private fb: FormBuilder, private cdr: ChangeDetectorRef, private zone: NgZone) {
    this.firstFormGroup = this.fb.group({draggable: [false, Validators.requiredTrue]});
  }

  ngOnDestroy() {
    if (this.snackRef) {
      this.snackRef.dismiss();
    }
  }

  validateFirstForm(): void {
    this.validate.first = true;
    this.cdr.markForCheck();
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.zone.run(() => {
          this.validate.first = false;
          this.cdr.markForCheck();
        });
      }, 500);
    });
  }

  firstFormValidated(stepper: MatStepper): void {
    this.firstFormGroup.get('draggable').setValue(true);
    stepper.next();
  }

  openSnackBar(message: string, action: string) {
    this.snackRef = this.snackBar.open(message, action, {duration: 5000});
    this.snackRef.onAction().toPromise().then(val => {
      console.log(val);
      this.router.navigate(['/']);
    });
  }
}
