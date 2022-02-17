import IModel from '../../core/interface/IModel';
import Threshold from './Threshold';
export default class ExperienceModel implements IModel {
    private experienceModelId;
    private name;
    private metadata;
    private defaultExperience;
    private defaultRankCap;
    private maxRankCap;
    private rankThreshold;
    getExperienceModelId(): string | null;
    setExperienceModelId(experienceModelId: string | null): this;
    withExperienceModelId(experienceModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
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
    getRankThreshold(): Threshold | null;
    setRankThreshold(rankThreshold: Threshold | null): this;
    withRankThreshold(rankThreshold: Threshold | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceModel | null;
    toDict(): {
        [key: string]: any;
    };
}
