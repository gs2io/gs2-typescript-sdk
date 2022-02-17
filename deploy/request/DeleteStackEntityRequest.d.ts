import IRequest from '../../core/interface/IRequest';
export default class DeleteStackEntityRequest implements IRequest {
    private requestId;
    private contextStack;
    private stackName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getStackName(): string | null;
    setStackName(stackName: string | null): this;
    withStackName(stackName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteStackEntityRequest;
    toDict(): {
        [key: string]: any;
    };
}
