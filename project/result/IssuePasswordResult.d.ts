import IResult from '@/gs2/core/interface/IResult';
export declare class IssuePasswordResult implements IResult {
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
