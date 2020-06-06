import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MediaService } from '../../services/media/media.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { IQuestion } from '../../interfaces/question';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, OnChanges {

  @Input() questions: IQuestion[];
  questionsForm: FormGroup = new FormGroup({});
  error: string;
  success: string;

  constructor(private mediaService: MediaService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.questions) {
      let group = {}
      this.questions.map(e => {
        group[`quest${e.id}`] = new FormControl(0, [Validators.required])
      })
      this.questionsForm = new FormGroup(group);
    }
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

  ngOnInit() { }

}
