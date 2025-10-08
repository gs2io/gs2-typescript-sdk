import IRequest from '../../core/interface/IRequest';
export default class GetGatheringRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private gatheringName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getGatheringName(): string | null;
    setGatheringName(gatheringName: string | null): this;
    withGatheringName(gatheringName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetGatheringRequest;
    toDict(): {
        [key: string]: any;
    };
}
