import IRequest from '../../core/interface/IRequest';
export default class UpdateExperienceModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private experienceName;
    private description;
    private metadata;
    private defaultExperience;
    private defaultRankCap;
    private maxRankCap;
    private rankThresholdName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getExperienceName(): string | null;
    setExperienceName(experienceName: string | null): this;
    withExperienceName(experienceName: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getDefaultExperience(): number | null;
    setDefaultExperience(defaultExperience: number | null): this;
    withDefaultExperience(defaultExperience: number | null): this;
    getDefaultRankCap(): number | null;
    setDefaultRankCap(defaultRankCap: number | null): this;
    withDefaultRankCap(defaultRankCap: number | null): this;
    getMaxRankCap(): number | null;
    setMaxRankCap(maxRankCap: number | null): this;
    withMaxRankCap(maxRankCap: number | null): this;
    getRankThresholdName(): string | null;
    setRankThresholdName(rankThresholdName: string | null): this;
    withRankThresholdName(rankThresholdName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateExperienceModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
