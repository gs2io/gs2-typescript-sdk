import IRequest from '../../core/interface/IRequest';
import * as Gs2Chat from '../model';
export default class UpdateNotificationTypeRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private roomName;
    private accessToken;
    private notificationTypes;
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
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getNotificationTypes(): Gs2Chat.NotificationType[] | null;
    setNotificationTypes(notificationTypes: Gs2Chat.NotificationType[] | null): this;
    withNotificationTypes(notificationTypes: Gs2Chat.NotificationType[] | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNotificationTypeRequest;
    toDict(): {
        [key: string]: any;
    };
}
