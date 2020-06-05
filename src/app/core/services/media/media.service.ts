import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITraining } from '../../interfaces/training';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IQuestionsRes } from '../../interfaces/question';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private httpClient: HttpClient) { }

  getTrainings(): Observable<ITraining[]> {
    return this.httpClient.get<ITraining[]>(`assets/data/training.json`);
  }

  getElearningQuestions(): Observable<IQuestionsRes> {
    return this.httpClient.get<IQuestionsRes>(`${environment.API_base}e-learning`)
  }

  postAnAnswer(qID: number, ansID: number) {
    return this.httpClient.post(`${environment.API_base}questions/${qID}/send-answer`, {
      question: qID,
      answer_id: ansID
    })
    ///questions/{question}/send-answer
  }
}
