import IModel from '../../core/interface/IModel';
export default class Room implements IModel {
    private roomId;
    private name;
    private userId;
    private metadata;
    private password;
    private whiteListUserIds;
    private createdAt;
    private updatedAt;
    getRoomId(): string | null;
    setRoomId(roomId: string | null): this;
    withRoomId(roomId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getPassword(): string | null;
    setPassword(password: string | null): this;
    withPassword(password: string | null): this;
    getWhiteListUserIds(): string[] | null;
    setWhiteListUserIds(whiteListUserIds: string[] | null): this;
    withWhiteListUserIds(whiteListUserIds: string[] | null): this;
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
