import IModel from '../../core/interface/IModel';
export default class ExperienceModelMaster implements IModel {
    private experienceModelId;
    private name;
    private description;
    private metadata;
    private defaultExperience;
    private defaultRankCap;
    private maxRankCap;
    private rankThresholdName;
    private createdAt;
    private updatedAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getExperienceName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, experienceName: string | null): string | null;
    getExperienceModelId(): string | null;
    setExperienceModelId(experienceModelId: string | null): this;
    withExperienceModelId(experienceModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
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
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceModelMaster | null;
    toDict(): {
        [key: string]: any;
    };
}