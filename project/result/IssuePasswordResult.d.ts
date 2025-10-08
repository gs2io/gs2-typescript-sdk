import IResult from '../../core/interface/IResult';
export default class IssuePasswordResult implements IResult {
    private newPassword;
    getNewPassword(): string | null;
    setNewPassword(newPassword: string | null): this;
    withNewPassword(newPassword: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): IssuePasswordResult;
    toDict(): {
        [key: string]: any;
    };
}
