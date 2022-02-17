import IRequest from '../../core/interface/IRequest';
import * as Gs2Chat from '../model';
export default class SubscribeByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private roomName;
    private userId;
    private notificationTypes;
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
    getNotificationTypes(): Gs2Chat.NotificationType[] | null;
    setNotificationTypes(notificationTypes: Gs2Chat.NotificationType[] | null): this;
    withNotificationTypes(notificationTypes: Gs2Chat.NotificationType[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SubscribeByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
