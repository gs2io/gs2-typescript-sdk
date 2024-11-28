import IModel from '../../core/interface/IModel';
import * as Gs2Matchmaking from '../../matchmaking/model';
export default class Player implements IModel {
    private userId;
    private attributes;
    private roleName;
    private denyUserIds;
    private createdAt;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getAttributes(): Gs2Matchmaking.Attribute[] | null;
    setAttributes(attributes: Gs2Matchmaking.Attribute[] | null): this;
    withAttributes(attributes: Gs2Matchmaking.Attribute[] | null): this;
    getRoleName(): string | null;
    setRoleName(roleName: string | null): this;
    withRoleName(roleName: string | null): this;
    getDenyUserIds(): string[] | null;
    setDenyUserIds(denyUserIds: string[] | null): this;
    withDenyUserIds(denyUserIds: string[] | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Player | null;
    toDict(): {
        [key: string]: any;
    };
}
