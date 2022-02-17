import IRequest from '../../core/interface/IRequest';
export default class GetStackStatusRequest implements IRequest {
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
    }): GetStackStatusRequest;
    toDict(): {
        [key: string]: any;
    };
}
