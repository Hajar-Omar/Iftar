export interface ISetting {
    setting: {
        date_time: string,
        date: string,
        time: string
        speaker: string,
        extra_link: string,
        remaining_time: number;
    },
    agenda: [
        {
            id: number,
            name: string,
            time_from: string,
            time_to: string;
        },
        {
            id: number,
            name: string,
            time_from: string,
            time_to: string;
        }
    ]
}