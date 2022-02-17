import IRequest from '../../core/interface/IRequest';
export default class GetResourceRequest implements IRequest {
    private requestId;
    private contextStack;
    private stackName;
    private resourceName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getStackName(): string | null;
    setStackName(stackName: string | null): this;
    withStackName(stackName: string | null): this;
    getResourceName(): string | null;
    setResourceName(resourceName: string | null): this;
    withResourceName(resourceName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetResourceRequest;
    toDict(): {
        [key: string]: any;
    };
}
