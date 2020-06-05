import { Component, OnInit } from '@angular/core';
import { ITraining } from 'src/app/core/interfaces/training';
import { MediaService } from 'src/app/core/services/media/media.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-elearning',
  templateUrl: './elearning.component.html',
  styleUrls: ['./elearning.component.scss']
})
export class ElearningComponent implements OnInit {

  trainings: ITraining[] = [];
  questions = [];
  questionsForm: FormGroup = new FormGroup({})
  error: string;
  success: string;

  constructor(private mediaService: MediaService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadTrainings();
    this.loadElearningQuestions();
  }

  loadTrainings() {
    this.mediaService.getTrainings().subscribe(d => this.trainings.push(...d))
  }

  loadElearningQuestions() {
    let group = {}
    this.mediaService.getElearningQuestions().subscribe(d => {
      this.questions.push(...d.data);
      d.data.map(e => {
        group[`quest${e.id}`] = new FormControl(0, [Validators.required])
      })
      this.questionsForm = new FormGroup(group)
    })
  }

  submitAnswer(qId: string) {
    this.mediaService.postAnAnswer(+qId, +this.questionsForm.value[`quest${qId}`]).subscribe(d => {
      this.success = d['title'];
      this.error = '';
    }, error => {
      this.error = error.error.title;
      this.success = '';
    })
  }

}
