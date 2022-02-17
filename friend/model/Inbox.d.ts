import IModel from '../../core/interface/IModel';
export default class Inbox implements IModel {
    private inboxId;
    private userId;
    private fromUserIds;
    private createdAt;
    private updatedAt;
    getInboxId(): string | null;
    setInboxId(inboxId: string | null): this;
    withInboxId(inboxId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getFromUserIds(): string[] | null;
    setFromUserIds(fromUserIds: string[] | null): this;
    withFromUserIds(fromUserIds: string[] | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Inbox | null;
    toDict(): {
        [key: string]: any;
    };
}
