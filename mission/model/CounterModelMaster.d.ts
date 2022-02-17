import IModel from '../../core/interface/IModel';
import CounterScopeModel from './CounterScopeModel';
export default class CounterModelMaster implements IModel {
    private counterId;
    private name;
    private metadata;
    private description;
    private scopes;
    private challengePeriodEventId;
    private createdAt;
    private updatedAt;
    getCounterId(): string | null;
    setCounterId(counterId: string | null): this;
    withCounterId(counterId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getScopes(): CounterScopeModel[] | null;
    setScopes(scopes: CounterScopeModel[] | null): this;
    withScopes(scopes: CounterScopeModel[] | null): this;
    getChallengePeriodEventId(): string | null;
    setChallengePeriodEventId(challengePeriodEventId: string | null): this;
    withChallengePeriodEventId(challengePeriodEventId: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CounterModelMaster | null;
    toDict(): {
        [key: string]: any;
    };
}
