import IModel from '../../core/interface/IModel';
import * as Gs2Inbox from '../../inbox/model';
export default class GlobalMessageMaster implements IModel {
    private globalMessageId;
    private name;
    private metadata;
    private readAcquireActions;
    private expiresTimeSpan;
    private expiresAt;
    private messageReceptionPeriodEventId;
    private createdAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getGlobalMessageName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, globalMessageName: string | null): string | null;
    getGlobalMessageId(): string | null;
    setGlobalMessageId(globalMessageId: string | null): this;
    withGlobalMessageId(globalMessageId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getReadAcquireActions(): Gs2Inbox.AcquireAction[] | null;
    setReadAcquireActions(readAcquireActions: Gs2Inbox.AcquireAction[] | null): this;
    withReadAcquireActions(readAcquireActions: Gs2Inbox.AcquireAction[] | null): this;
    getExpiresTimeSpan(): Gs2Inbox.TimeSpan | null;
    setExpiresTimeSpan(expiresTimeSpan: Gs2Inbox.TimeSpan | null): this;
    withExpiresTimeSpan(expiresTimeSpan: Gs2Inbox.TimeSpan | null): this;
    /** @deprecated */
    getExpiresAt(): number | null;
    /** @deprecated */
    setExpiresAt(expiresAt: number | null): this;
    /** @deprecated */
    withExpiresAt(expiresAt: number | null): this;
    getMessageReceptionPeriodEventId(): string | null;
    setMessageReceptionPeriodEventId(messageReceptionPeriodEventId: string | null): this;
    withMessageReceptionPeriodEventId(messageReceptionPeriodEventId: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GlobalMessageMaster | null;
    toDict(): {
        [key: string]: any;
    };
}
