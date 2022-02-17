import IRequest from '@/gs2/core/interface/IRequest';
export declare class GetEventRequest implements IRequest {
    private requestId;
    private contextStack;
    private stackName;
    private eventName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getStackName(): string | null;
    setStackName(stackName: string | null): this;
    withStackName(stackName: string | null): this;
    getEventName(): string | null;
    setEventName(eventName: string | null): this;
    withEventName(eventName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetEventRequest;
    toDict(): {
        [key: string]: any;
    };
}
