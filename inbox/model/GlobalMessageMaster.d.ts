import IModel from '../../core/interface/IModel';
import AcquireAction from './AcquireAction';
import TimeSpan from './TimeSpan';
export default class GlobalMessageMaster implements IModel {
    private globalMessageId;
    private name;
    private metadata;
    private readAcquireActions;
    private expiresTimeSpan;
    private createdAt;
    private expiresAt;
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
    getReadAcquireActions(): AcquireAction[] | null;
    setReadAcquireActions(readAcquireActions: AcquireAction[] | null): this;
    withReadAcquireActions(readAcquireActions: AcquireAction[] | null): this;
    getExpiresTimeSpan(): TimeSpan | null;
    setExpiresTimeSpan(expiresTimeSpan: TimeSpan | null): this;
    withExpiresTimeSpan(expiresTimeSpan: TimeSpan | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getExpiresAt(): number | null;
    setExpiresAt(expiresAt: number | null): this;
    withExpiresAt(expiresAt: number | null): this;
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
