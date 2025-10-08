import IModel from '../../core/interface/IModel';
import * as Gs2Experience from '../../experience/model';
export default class ExperienceModel implements IModel {
    private experienceModelId;
    private name;
    private metadata;
    private defaultExperience;
    private defaultRankCap;
    private maxRankCap;
    private rankThreshold;
    private acquireActionRates;
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
    getRankThreshold(): Gs2Experience.Threshold | null;
    setRankThreshold(rankThreshold: Gs2Experience.Threshold | null): this;
    withRankThreshold(rankThreshold: Gs2Experience.Threshold | null): this;
    getAcquireActionRates(): Gs2Experience.AcquireActionRate[] | null;
    setAcquireActionRates(acquireActionRates: Gs2Experience.AcquireActionRate[] | null): this;
    withAcquireActionRates(acquireActionRates: Gs2Experience.AcquireActionRate[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceModel | null;
    toDict(): {
        [key: string]: any;
    };
}
