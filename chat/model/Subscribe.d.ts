import IModel from '../../core/interface/IModel';
import NotificationType from './NotificationType';
export default class Subscribe implements IModel {
    private subscribeId;
    private userId;
    private roomName;
    private notificationTypes;
    private createdAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getRoomName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, roomName: string | null): string | null;
    getSubscribeId(): string | null;
    setSubscribeId(subscribeId: string | null): this;
    withSubscribeId(subscribeId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getRoomName(): string | null;
    setRoomName(roomName: string | null): this;
    withRoomName(roomName: string | null): this;
    getNotificationTypes(): NotificationType[] | null;
    setNotificationTypes(notificationTypes: NotificationType[] | null): this;
    withNotificationTypes(notificationTypes: NotificationType[] | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Subscribe | null;
    toDict(): {
        [key: string]: any;
    };
}
