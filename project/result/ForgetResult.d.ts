import IResult from '@/gs2/core/interface/IResult';
export declare class ForgetResult implements IResult {
    private issuePasswordToken;
    getIssuePasswordToken(): string | null;
    setIssuePasswordToken(issuePasswordToken: string | null): this;
    withIssuePasswordToken(issuePasswordToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ForgetResult;
    toDict(): {
        [key: string]: any;
    };
}
