import IModel from '../../core/interface/IModel';
export default class Await implements IModel {
    private awaitId;
    private userId;
    private rateName;
    private name;
    private count;
    private exchangedAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getAwaitName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, awaitName: string | null): string | null;
    getAwaitId(): string | null;
    setAwaitId(awaitId: string | null): this;
    withAwaitId(awaitId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getRateName(): string | null;
    setRateName(rateName: string | null): this;
    withRateName(rateName: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    getExchangedAt(): number | null;
    setExchangedAt(exchangedAt: number | null): this;
    withExchangedAt(exchangedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Await | null;
    toDict(): {
        [key: string]: any;
    };
}