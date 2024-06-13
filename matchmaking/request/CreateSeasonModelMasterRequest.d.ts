import IRequest from '../../core/interface/IRequest';
export default class CreateSeasonModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private name;
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
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
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
    }): CreateSeasonModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
