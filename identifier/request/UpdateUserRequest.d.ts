import IRequest from '../../core/interface/IRequest';
export default class UpdateUserRequest implements IRequest {
    private requestId;
    private contextStack;
    private userName;
    private description;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getUserName(): string | null;
    setUserName(userName: string | null): this;
    withUserName(userName: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateUserRequest;
    toDict(): {
        [key: string]: any;
    };
}
