import IRequest from '../../core/interface/IRequest';
export default class GetEventRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private eventName;
    private accessToken;
    private isInSchedule;
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
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getIsInSchedule(): boolean | null;
    setIsInSchedule(isInSchedule: boolean | null): this;
    withIsInSchedule(isInSchedule: boolean | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetEventRequest;
    toDict(): {
        [key: string]: any;
    };
}
