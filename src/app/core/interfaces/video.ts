import { IQuestion } from './question';

export interface IVideo {
    data: {
        id: number;
        url: string;
        init_points: number;
        total_points: number;
        questions: IQuestion[];
    }
}