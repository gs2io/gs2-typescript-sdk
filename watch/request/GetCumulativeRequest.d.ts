import IRequest from '../../core/interface/IRequest';
export default class GetCumulativeRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private resourceGrn;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getResourceGrn(): string | null;
    setResourceGrn(resourceGrn: string | null): this;
    withResourceGrn(resourceGrn: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetCumulativeRequest;
    toDict(): {
        [key: string]: any;
    };
}
