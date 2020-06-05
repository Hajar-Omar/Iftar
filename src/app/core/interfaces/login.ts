export interface ILogin {
    access_token: string;
    token_type: string;
    expires_in: number;
    account: IAccount;
}

export interface IAccount {
    data:
    {
        id: number;
        name: string;
        email: string;
        score: number;
        company: string;
        title: string;
        phone: string;
        country: string;
        keep_updated: string;
    }
}