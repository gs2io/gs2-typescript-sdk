import IRequest from '../../core/interface/IRequest';
export default class WantRoomRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private name;
    private notificationUserIds;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getNotificationUserIds(): string[] | null;
    setNotificationUserIds(notificationUserIds: string[] | null): this;
    withNotificationUserIds(notificationUserIds: string[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): WantRoomRequest;
    toDict(): {
        [key: string]: any;
    };
}
