import IRequest from '../../core/interface/IRequest';
export default class DeleteRoomFromBackendRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private roomName;
    private userId;
    private duplicationAvoider;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getRoomName(): string | null;
    setRoomName(roomName: string | null): this;
    withRoomName(roomName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteRoomFromBackendRequest;
    toDict(): {
        [key: string]: any;
    };
}
