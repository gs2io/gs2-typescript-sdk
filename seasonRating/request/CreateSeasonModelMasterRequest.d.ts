import IRequest from '../../core/interface/IRequest';
import * as Gs2SeasonRating from '../model';
export default class CreateSeasonModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private name;
    private description;
    private metadata;
    private tiers;
    private experienceModelId;
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
    getTiers(): Gs2SeasonRating.TierModel[] | null;
    setTiers(tiers: Gs2SeasonRating.TierModel[] | null): this;
    withTiers(tiers: Gs2SeasonRating.TierModel[] | null): this;
    getExperienceModelId(): string | null;
    setExperienceModelId(experienceModelId: string | null): this;
    withExperienceModelId(experienceModelId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateSeasonModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
