import IRequest from '../../core/interface/IRequest';
import * as Gs2Enchant from '../model';
export default class CreateBalanceParameterModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private name;
    private description;
    private metadata;
    private totalValue;
    private initialValueStrategy;
    private parameters;
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
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getTotalValue(): number | null;
    setTotalValue(totalValue: number | null): this;
    withTotalValue(totalValue: number | null): this;
    getInitialValueStrategy(): string | null;
    setInitialValueStrategy(initialValueStrategy: string | null): this;
    withInitialValueStrategy(initialValueStrategy: string | null): this;
    getParameters(): Gs2Enchant.BalanceParameterValueModel[] | null;
    setParameters(parameters: Gs2Enchant.BalanceParameterValueModel[] | null): this;
    withParameters(parameters: Gs2Enchant.BalanceParameterValueModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateBalanceParameterModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
