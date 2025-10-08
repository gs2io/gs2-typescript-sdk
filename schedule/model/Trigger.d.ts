import IModel from '../../core/interface/IModel';
export default class Trigger implements IModel {
    private triggerId;
    private name;
    private userId;
    private triggeredAt;
    private expiresAt;
    private createdAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getTriggerName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, triggerName: string | null): string | null;
    getTriggerId(): string | null;
    setTriggerId(triggerId: string | null): this;
    withTriggerId(triggerId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getTriggeredAt(): number | null;
    setTriggeredAt(triggeredAt: number | null): this;
    withTriggeredAt(triggeredAt: number | null): this;
    getExpiresAt(): number | null;
    setExpiresAt(expiresAt: number | null): this;
    withExpiresAt(expiresAt: number | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Trigger | null;
    toDict(): {
        [key: string]: any;
    };
}
