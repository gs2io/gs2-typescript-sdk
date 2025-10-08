import IRequest from '../../core/interface/IRequest';
import * as Gs2Enchant from '../model';
export default class CreateRarityParameterModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private name;
    private description;
    private metadata;
    private maximumParameterCount;
    private parameterCounts;
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
    getMaximumParameterCount(): number | null;
    setMaximumParameterCount(maximumParameterCount: number | null): this;
    withMaximumParameterCount(maximumParameterCount: number | null): this;
    getParameterCounts(): Gs2Enchant.RarityParameterCountModel[] | null;
    setParameterCounts(parameterCounts: Gs2Enchant.RarityParameterCountModel[] | null): this;
    withParameterCounts(parameterCounts: Gs2Enchant.RarityParameterCountModel[] | null): this;
    getParameters(): Gs2Enchant.RarityParameterValueModel[] | null;
    setParameters(parameters: Gs2Enchant.RarityParameterValueModel[] | null): this;
    withParameters(parameters: Gs2Enchant.RarityParameterValueModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateRarityParameterModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
