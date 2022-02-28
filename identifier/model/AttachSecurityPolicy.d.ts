import IModel from '../../core/interface/IModel';
export default class AttachSecurityPolicy implements IModel {
    private userId;
    private securityPolicyIds;
    private attachedAt;
    static getOwnerId(grn: string): string | null;
    static getUserName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(ownerId: string | null, userName: string | null): string | null;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getSecurityPolicyIds(): string[] | null;
    setSecurityPolicyIds(securityPolicyIds: string[] | null): this;
    withSecurityPolicyIds(securityPolicyIds: string[] | null): this;
    getAttachedAt(): number | null;
    setAttachedAt(attachedAt: number | null): this;
    withAttachedAt(attachedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AttachSecurityPolicy | null;
    toDict(): {
        [key: string]: any;
    };
}
