import IModel from '../../core/interface/IModel';
import Attribute from './Attribute';
export default class Player implements IModel {
    private userId;
    private attributes;
    private roleName;
    private denyUserIds;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getAttributes(): Attribute[] | null;
    setAttributes(attributes: Attribute[] | null): this;
    withAttributes(attributes: Attribute[] | null): this;
    getRoleName(): string | null;
    setRoleName(roleName: string | null): this;
    withRoleName(roleName: string | null): this;
    getDenyUserIds(): string[] | null;
    setDenyUserIds(denyUserIds: string[] | null): this;
    withDenyUserIds(denyUserIds: string[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Player | null;
    toDict(): {
        [key: string]: any;
    };
}
