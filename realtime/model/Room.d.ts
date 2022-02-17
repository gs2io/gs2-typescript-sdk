import IModel from '../../core/interface/IModel';
export default class Room implements IModel {
    private roomId;
    private name;
    private ipAddress;
    private port;
    private encryptionKey;
    private notificationUserIds;
    private createdAt;
    private updatedAt;
    getRoomId(): string | null;
    setRoomId(roomId: string | null): this;
    withRoomId(roomId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getIpAddress(): string | null;
    setIpAddress(ipAddress: string | null): this;
    withIpAddress(ipAddress: string | null): this;
    getPort(): number | null;
    setPort(port: number | null): this;
    withPort(port: number | null): this;
    getEncryptionKey(): string | null;
    setEncryptionKey(encryptionKey: string | null): this;
    withEncryptionKey(encryptionKey: string | null): this;
    getNotificationUserIds(): string[] | null;
    setNotificationUserIds(notificationUserIds: string[] | null): this;
    withNotificationUserIds(notificationUserIds: string[] | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Room | null;
    toDict(): {
        [key: string]: any;
    };
}
