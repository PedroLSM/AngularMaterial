import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop-training.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() finishTraining = new EventEmitter<void>();
  progress: number = 0;
  timer;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.onStart();
  }

  onStop() {

    clearInterval(this.timer);

    let dialogRef = this.dialog.open(StopTrainingComponent, {
      width: '250px',
      data: { progress: this.progress }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        this.onStart();
      }else{
        this.finishTraining.emit();
      }
    })
}

onStart() {
  this.timer = setInterval(() => {
    this.progress += 5;
    if (this.progress >= 100) {
      clearInterval(this.timer);
      this.finishTraining.emit();
    }
  }, 500);
}

}
