import IModel from '../../core/interface/IModel';
export default class SendMemberRequest implements IModel {
    private userId;
    private targetGuildName;
    private metadata;
    private createdAt;
    static isValid(grn: string): boolean;
    static createGrn(): string | null;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getTargetGuildName(): string | null;
    setTargetGuildName(targetGuildName: string | null): this;
    withTargetGuildName(targetGuildName: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SendMemberRequest | null;
    toDict(): {
        [key: string]: any;
    };
}
