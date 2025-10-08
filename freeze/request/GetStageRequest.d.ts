import IRequest from '../../core/interface/IRequest';
export default class GetStageRequest implements IRequest {
    private requestId;
    private contextStack;
    private stageName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getStageName(): string | null;
    setStageName(stageName: string | null): this;
    withStageName(stageName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetStageRequest;
    toDict(): {
        [key: string]: any;
    };
}
