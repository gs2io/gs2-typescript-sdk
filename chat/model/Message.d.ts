import IModel from '../../core/interface/IModel';
export default class Message implements IModel {
    private messageId;
    private roomName;
    private name;
    private userId;
    private category;
    private metadata;
    private createdAt;
    getMessageId(): string | null;
    setMessageId(messageId: string | null): this;
    withMessageId(messageId: string | null): this;
    getRoomName(): string | null;
    setRoomName(roomName: string | null): this;
    withRoomName(roomName: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getCategory(): number | null;
    setCategory(category: number | null): this;
    withCategory(category: number | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Message | null;
    toDict(): {
        [key: string]: any;
    };
}
