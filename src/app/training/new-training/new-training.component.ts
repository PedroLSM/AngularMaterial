import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @Output() startTraining = new EventEmitter<void>();

  trainings = [
    { id: 1, value: "Anaeróbico"},
    { id: 2, value: "Aeróbico"}
  ]

  constructor() { }

  ngOnInit() {
  }

  public onStartTraining(training){
    if (training.ngControl.invalid) return;
    this.startTraining.emit();
  }

}
