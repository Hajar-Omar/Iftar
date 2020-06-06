import { Component, OnInit } from '@angular/core';
import { ITraining } from 'src/app/core/interfaces/training';
import { MediaService } from 'src/app/core/services/media/media.service';

@Component({
  selector: 'app-elearning',
  templateUrl: './elearning.component.html',
  styleUrls: ['./elearning.component.scss']
})
export class ElearningComponent implements OnInit {

  trainings: ITraining[] = [];
  questions = [];

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
    this.loadTrainings();
    this.loadElearningQuestions();
  }

  loadTrainings() {
    this.mediaService.getTrainings().subscribe(d => this.trainings.push(...d))
  }

  loadElearningQuestions() {
    this.mediaService.getElearningQuestions().subscribe(d => this.questions.push(...d.data))
  }

}
