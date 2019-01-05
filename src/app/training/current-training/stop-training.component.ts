import { Component, Inject } from '@angular/core';
import { CurrentTrainingComponent } from './current-training.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-stop-training',
    template: 
    `
        <h1 mat-dialog-title>Are you sure ?</h1>
        <div mat-dialog-content>
            <p>Do you want to stop with {{ data.progress }}% ?</p>
        </div>
        <mat-dialog-actions>
            <button mat-button [mat-dialog-close]="true">Yes</button>
            <button mat-button [mat-dialog-close]="false">No</button>
        </mat-dialog-actions>
    `
})
export class StopTrainingComponent {
    constructor(
        public dialogRef: MatDialogRef<CurrentTrainingComponent>,
        @Inject(MAT_DIALOG_DATA) public data) {}
    

}
