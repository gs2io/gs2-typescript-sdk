import IModel from '../../core/interface/IModel';
export default class SendBox implements IModel {
    private sendBoxId;
    private userId;
    private targetUserIds;
    private createdAt;
    private updatedAt;
    getSendBoxId(): string | null;
    setSendBoxId(sendBoxId: string | null): this;
    withSendBoxId(sendBoxId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getTargetUserIds(): string[] | null;
    setTargetUserIds(targetUserIds: string[] | null): this;
    withTargetUserIds(targetUserIds: string[] | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SendBox | null;
    toDict(): {
        [key: string]: any;
    };
}
