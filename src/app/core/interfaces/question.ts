export interface IQuestionsRes {
    data: IQuestion[];
    links: {
        first: string,
        last: string;
        prev: string;
        next: string;
    };
    meta: {
        current_page: number;
        from: number;
        last_page: number;
        path: string;
        per_page: number;
        to: number;
        total: number;
    }
}

export interface IQuestion {
    id: number;
    title: string;
    score: number;
    answers: IAnswer[];
}

export interface IAnswer {
    id: number;
    answer: string;
}