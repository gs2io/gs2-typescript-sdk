import IRequest from '../../core/interface/IRequest';
export default class UpdateSeasonModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private seasonName;
    private description;
    private metadata;
    private maximumParticipants;
    private experienceModelId;
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
    getSeasonName(): string | null;
    setSeasonName(seasonName: string | null): this;
    withSeasonName(seasonName: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getMaximumParticipants(): number | null;
    setMaximumParticipants(maximumParticipants: number | null): this;
    withMaximumParticipants(maximumParticipants: number | null): this;
    getExperienceModelId(): string | null;
    setExperienceModelId(experienceModelId: string | null): this;
    withExperienceModelId(experienceModelId: string | null): this;
    getChallengePeriodEventId(): string | null;
    setChallengePeriodEventId(challengePeriodEventId: string | null): this;
    withChallengePeriodEventId(challengePeriodEventId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateSeasonModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
