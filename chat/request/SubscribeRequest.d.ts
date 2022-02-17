import IRequest from '../../core/interface/IRequest';
import * as Gs2Chat from '../model';
export default class SubscribeRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private roomName;
    private accessToken;
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
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getNotificationTypes(): Gs2Chat.NotificationType[] | null;
    setNotificationTypes(notificationTypes: Gs2Chat.NotificationType[] | null): this;
    withNotificationTypes(notificationTypes: Gs2Chat.NotificationType[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SubscribeRequest;
    toDict(): {
        [key: string]: any;
    };
}
