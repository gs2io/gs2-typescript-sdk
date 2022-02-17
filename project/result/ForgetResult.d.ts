import IResult from '../../core/interface/IResult';
export default class ForgetResult implements IResult {
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
