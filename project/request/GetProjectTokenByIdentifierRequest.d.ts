import IRequest from '../../core/interface/IRequest';
export default class GetProjectTokenByIdentifierRequest implements IRequest {
    private requestId;
    private contextStack;
    private accountName;
    private projectName;
    private userName;
    private password;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getAccountName(): string | null;
    setAccountName(accountName: string | null): this;
    withAccountName(accountName: string | null): this;
    getProjectName(): string | null;
    setProjectName(projectName: string | null): this;
    withProjectName(projectName: string | null): this;
    getUserName(): string | null;
    setUserName(userName: string | null): this;
    withUserName(userName: string | null): this;
    getPassword(): string | null;
    setPassword(password: string | null): this;
    withPassword(password: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetProjectTokenByIdentifierRequest;
    toDict(): {
        [key: string]: any;
    };
}
