import IModel from '../../core/interface/IModel';
export default class SeasonModel implements IModel {
    private seasonModelId;
    private name;
    private metadata;
    private maximumParticipants;
    private experienceModelId;
    private challengePeriodEventId;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getSeasonName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, seasonName: string | null): string | null;
    getSeasonModelId(): string | null;
    setSeasonModelId(seasonModelId: string | null): this;
    withSeasonModelId(seasonModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
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
    }): SeasonModel | null;
    toDict(): {
        [key: string]: any;
    };
}
