import IModel from '../../core/interface/IModel';
import * as Gs2Mission from '../../mission/model';
export default class Counter implements IModel {
    private counterId;
    private userId;
    private name;
    private values;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getCounterName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, counterName: string | null): string | null;
    getCounterId(): string | null;
    setCounterId(counterId: string | null): this;
    withCounterId(counterId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getValues(): Gs2Mission.ScopedValue[] | null;
    setValues(values: Gs2Mission.ScopedValue[] | null): this;
    withValues(values: Gs2Mission.ScopedValue[] | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Counter | null;
    toDict(): {
        [key: string]: any;
    };
}
