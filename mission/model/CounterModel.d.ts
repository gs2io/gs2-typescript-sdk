import IModel from '../../core/interface/IModel';
import CounterScopeModel from './CounterScopeModel';
export default class CounterModel implements IModel {
    private counterId;
    private name;
    private metadata;
    private scopes;
    private challengePeriodEventId;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getCounterName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, counterName: string | null): string | null;
    getCounterId(): string | null;
    setCounterId(counterId: string | null): this;
    withCounterId(counterId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getScopes(): CounterScopeModel[] | null;
    setScopes(scopes: CounterScopeModel[] | null): this;
    withScopes(scopes: CounterScopeModel[] | null): this;
    getChallengePeriodEventId(): string | null;
    setChallengePeriodEventId(challengePeriodEventId: string | null): this;
    withChallengePeriodEventId(challengePeriodEventId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CounterModel | null;
    toDict(): {
        [key: string]: any;
    };
}
