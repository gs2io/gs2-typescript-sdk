import IRequest from '../../core/interface/IRequest';
import * as Gs2Mission from '../model';
export default class CreateCounterModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private name;
    private metadata;
    private description;
    private scopes;
    private challengePeriodEventId;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getScopes(): Gs2Mission.CounterScopeModel[] | null;
    setScopes(scopes: Gs2Mission.CounterScopeModel[] | null): this;
    withScopes(scopes: Gs2Mission.CounterScopeModel[] | null): this;
    getChallengePeriodEventId(): string | null;
    setChallengePeriodEventId(challengePeriodEventId: string | null): this;
    withChallengePeriodEventId(challengePeriodEventId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateCounterModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
