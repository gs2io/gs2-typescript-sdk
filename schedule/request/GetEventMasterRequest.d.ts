import IRequest from '../../core/interface/IRequest';
export default class GetEventMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private eventName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getEventName(): string | null;
    setEventName(eventName: string | null): this;
    withEventName(eventName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetEventMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
