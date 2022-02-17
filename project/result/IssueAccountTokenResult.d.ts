import IResult from '../../core/interface/IResult';
export default class IssueAccountTokenResult implements IResult {
    private accountToken;
    getAccountToken(): string | null;
    setAccountToken(accountToken: string | null): this;
    withAccountToken(accountToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): IssueAccountTokenResult;
    toDict(): {
        [key: string]: any;
    };
}
